// --- ДАННЫЕ С ФОТОГРАФИЯМИ ---
const now = new Date();
const currentHour = now.getHours();

const baseRides = [
    { 
        id: 1, 
        time: "10:00", 
        route: "Тбилиси - Батуми", 
        driver: "Гига", 
        // Ссылки на случайные фото
        driverImg: "https://randomuser.me/api/portraits/men/32.jpg",
        car: "Mercedes Sprinter", 
        carImg: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=600&q=80", // Фото белого спринтера
        price: 30, 
        seats: 15, 
        booked: 12 
    },
    { 
        id: 2, 
        time: "14:00", 
        route: "Тбилиси - Батуми", 
        driver: "Мамука", 
        driverImg: "https://randomuser.me/api/portraits/men/45.jpg",
        car: "Vito VIP", 
        carImg: "https://images.unsplash.com/photo-1605218457332-9e122ea75140?auto=format&fit=crop&w=600&q=80", // Фото минивэна
        price: 45, 
        seats: 7, 
        booked: 2 
    },
    { 
        id: 3, 
        time: "18:30", 
        route: "Тбилиси - Кутаиси", 
        driver: "Дато", 
        driverImg: "https://randomuser.me/api/portraits/men/62.jpg",
        car: "Ford Transit", 
        carImg: "https://images.unsplash.com/photo-1598084991519-c90900bf996c?auto=format&fit=crop&w=600&q=80", // Фото транзита
        price: 25, 
        seats: 18, 
        booked: 10 
    }
];

// --- ЧАСЫ (НОВАЯ ФУНКЦИЯ) ---
function updateClock() {
    const clockElement = document.getElementById('live-clock');
    const now = new Date();
    // Форматируем время как 14:05:33
    const timeString = now.toLocaleTimeString('ru-RU'); 
    clockElement.innerText = timeString;
}
// Запускаем часы каждую секунду
setInterval(updateClock, 1000);


// --- ГЕНЕРАЦИЯ ДАТ (Вкладки) ---
let selectedDateIndex = 0;

function initDateTabs() {
    const tabsContainer = document.getElementById('date-tabs');
    tabsContainer.innerHTML = '';
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

    for (let i = 0; i < 4; i++) {
        const date = new Date();
        date.setDate(now.getDate() + i);
        const dayName = i === 0 ? "Сегодня" : (i === 1 ? "Завтра" : days[date.getDay()]);
        const dateStr = `${date.getDate()} ${months[date.getMonth()]}`;
        
        const isActive = i === selectedDateIndex;
        const btnClass = isActive 
            ? "bg-blue-600 text-white shadow-md border-blue-600" 
            : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50";

        tabsContainer.innerHTML += `
            <button onclick="selectDate(${i})" class="flex-shrink-0 px-6 py-3 rounded-xl border transition duration-200 flex flex-col items-center min-w-[100px] ${btnClass}">
                <span class="text-xs font-medium opacity-80 uppercase">${dayName}</span>
                <span class="font-bold text-lg">${dateStr}</span>
            </button>
        `;
    }
}

function selectDate(index) {
    selectedDateIndex = index;
    initDateTabs();
    renderRides();
}

// --- ОТРИСОВКА РЕЙСОВ ---
function renderRides() {
    const container = document.getElementById('rides-container');
    container.innerHTML = ''; 

    if (baseRides.length === 0) {
        container.innerHTML = '<p class="text-center text-gray-400 py-10">Нет рейсов.</p>';
        return;
    }

    baseRides.forEach(ride => {
        let isClosed = false;
        
        if (selectedDateIndex === 0) { 
            const rideHour = parseInt(ride.time.split(':')[0]);
            if (rideHour <= currentHour) isClosed = true;
        }

        const seatsLeft = ride.seats - ride.booked;

        const btnClass = isClosed 
            ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
            : "bg-blue-50 text-blue-700 hover:bg-blue-100";
        
        const btnText = isClosed ? "Ушел" : "Выбрать";
        const btnAction = isClosed ? "" : `onclick="openModal(${ride.id})"`;

        // Добавил в карточку мини-аватарку водителя
        container.innerHTML += `
        <div class="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition duration-300">
            <div class="flex-grow text-center md:text-left w-full">
                <div class="flex items-center justify-center md:justify-start gap-3 mb-1">
                    <span class="text-2xl font-bold text-gray-900">${ride.time}</span>
                    <span class="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                        ${selectedDateIndex === 0 ? 'Сегодня' : 'Бронь'}
                    </span>
                </div>
                <h3 class="font-bold text-lg text-gray-800">${ride.route}</h3>
                <div class="flex items-center justify-center md:justify-start gap-3 mt-2">
                    <img src="${ride.driverImg}" class="w-8 h-8 rounded-full border border-gray-200" alt="driver">
                    <div class="text-left">
                        <p class="text-xs font-bold text-gray-800">${ride.driver}</p>
                        <p class="text-xs text-gray-500">${ride.car}</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-row md:flex-col items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                <div class="text-right">
                    <span class="block text-2xl font-bold text-gray-900">${ride.price} ₾</span>
                    <span class="block text-xs font-medium ${seatsLeft < 5 ? 'text-red-500' : 'text-green-600'}">
                        ${seatsLeft} мест свободно
                    </span>
                </div>
                <button ${btnAction} class="px-8 py-3 rounded-xl font-bold transition w-full md:w-auto ${btnClass}">
                    ${btnText}
                </button>
            </div>
        </div>
        `;
    });
}

// --- НОВОЕ МОДАЛЬНОЕ ОКНО ---
let selectedSeats = 1;

function openModal(id) {
    const ride = baseRides.find(r => r.id === id);
    if (!ride) return;
    
    // Заполняем ТЕКСТ
    document.getElementById('modal-route').innerText = ride.route;
    document.getElementById('modal-time').innerText = ride.time;
    document.getElementById('modal-driver-name').innerText = ride.driver;
    document.getElementById('modal-car-name').innerText = ride.car;
    
    // Заполняем КАРТИНКИ
    document.getElementById('modal-car-img').src = ride.carImg;
    document.getElementById('modal-driver-img').src = ride.driverImg;

    selectedSeats = 1;
    document.getElementById('seat-count').innerText = 1;
    document.getElementById('window-seat').checked = false;
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

function changeSeats(delta) {
    let newVal = selectedSeats + delta;
    if (newVal >= 1 && newVal <= 5) {
        selectedSeats = newVal;
        document.getElementById('seat-count').innerText = newVal;
    }
}

function scrollToResults() {
    document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' });
}

function confirmBooking() {
    const name = document.getElementById('p-name').value;
    const phone = document.getElementById('p-phone').value;
    
    if(!name || !phone) { alert("Заполните имя и телефон!"); return; }

    alert(`Бронь отправлена!\n\nВодитель: ${document.getElementById('modal-driver-name').innerText}\nПассажир: ${name}`);
    closeModal();
}

// ЗАПУСК
document.addEventListener('DOMContentLoaded', () => {
    initDateTabs();
    renderRides();
    updateClock(); // Запустить часы сразу
});