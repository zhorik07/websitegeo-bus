// 👇 ВСТАВЬ СЮДА СВОИ ДАННЫЕ SUPABASE !!!
const SUPABASE_URL = 'https://yxvrudfgpnyahlpbfzru.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4dnJ1ZGZncG55YWhscGJmenJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NTczODIsImV4cCI6MjA4NjIzMzM4Mn0.7Si7KmFTTV-DRvP04mj3_rpLgHXSRoa9lrruZZ7IcHg';



// 👇 ТВОЙ ТОКЕН БОТА (Я УЖЕ ВСТАВИЛ)
const TELEGRAM_TOKEN = '8527717333:AAGAW36LNt2F7X9JVk_LmuDQXTPKM2WFc0w';

// Инициализация
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const translations = {
    ru: {
        hero_title: "Путешествуй по Грузии с комфортом",
        hero_subtitle: "Бронируйте места онлайн. Без очередей на вокзале.",
        label_from: "Откуда",
        label_to: "Куда",
        btn_search: "Найти рейс",
        schedule_title: "Расписание рейсов",
        about_title: "Почему выбирают GeoBus?",
        about_text: "Забудьте о хаосе на автовокзалах и спорах с таксистами. GeoBus — это первый сервис в Грузии.",
        about_list_1: "Гарантия посадочного места",
        about_list_2: "Фиксированная цена",
        about_list_3: "Поддержка диспетчера 24/7",
        city_tbilisi: "Тбилиси",
        city_kutaisi: "Кутаиси",
        city_batumi: "Батуми",
        city_kazbegi: "Казбеги",
        status_departed: "Ушел",
        status_closed: "Продажа закрыта",
        btn_select: "Выбрать",
        seats_free: "мест свободно",
        modal_title: "Детали бронирования",
        modal_seats: "Сколько мест?",
        option_window: "Хочу у окна",
        modal_route_label: "Маршрут",
        btn_confirm: "Подтвердить бронь",
        ph_name: "Ваше Имя",
        ph_phone: "Телефон",
        today: "Сегодня",
        tomorrow: "Завтра",
        alert_success: "Бронь принята! Водитель свяжется с вами.",
        
        // Ключи
        route_tbi_bat: "Тбилиси - Батуми",
        route_tbi_kut: "Тбилиси - Кутаиси",
        route_tbi_kaz: "Тбилиси - Казбеги",
        car_sprinter: "Mercedes Sprinter (Белый)",
        car_vito: "Vito VIP (Черный)",
        car_transit: "Ford Transit (Комфорт)",
        driver_giga: "Гига",
        driver_mamuka: "Мамука",
        driver_dato: "Дато"
    },
    en: {
        hero_title: "Travel Georgia with Comfort",
        hero_subtitle: "Book seats online. No queues at the bus station.",
        label_from: "From",
        label_to: "To",
        btn_search: "Find Tickets",
        schedule_title: "Bus Schedule",
        about_title: "Why choose GeoBus?",
        about_text: "Forget the chaos at bus stations.",
        about_list_1: "Guaranteed seat reservation",
        about_list_2: "Fixed price",
        about_list_3: "24/7 Support",
        city_tbilisi: "Tbilisi",
        city_kutaisi: "Kutaisi",
        city_batumi: "Batumi",
        city_kazbegi: "Kazbegi",
        status_departed: "Departed",
        status_closed: "Booking Closed",
        btn_select: "Book Now",
        seats_free: "seats left",
        modal_title: "Booking Details",
        modal_seats: "How many seats?",
        option_window: "Window seat",
        modal_route_label: "Route",
        btn_confirm: "Confirm Booking",
        ph_name: "Your Name",
        ph_phone: "Phone Number",
        today: "Today",
        tomorrow: "Tomorrow",
        alert_success: "Booking accepted!",
        
        route_tbi_bat: "Tbilisi - Batumi",
        route_tbi_kut: "Tbilisi - Kutaisi",
        route_tbi_kaz: "Tbilisi - Kazbegi",
        car_sprinter: "Mercedes Sprinter (White)",
        car_vito: "Vito VIP (Black)",
        car_transit: "Ford Transit (Comfort)",
        driver_giga: "Giga",
        driver_mamuka: "Mamuka",
        driver_dato: "Dato"
    },
    ka: {
        hero_title: "იმგზავრეთ საქართველოში კომფორტულად",
        hero_subtitle: "დაჯავშნეთ ადგილები ონლაინ.",
        label_from: "საიდან",
        label_to: "სად",
        btn_search: "ბილეთის მოძებნა",
        schedule_title: "განრიგი",
        about_title: "რატომ GeoBus?",
        about_text: "დაივიწყეთ ქაოსი სადგურებზე.",
        about_list_1: "ადგილის გარანტია",
        about_list_2: "ფიქსირებული ფასი",
        about_list_3: "24/7 მხარდაჭერა",
        city_tbilisi: "თბილისი",
        city_kutaisi: "ქუთაისი",
        city_batumi: "ბათუმი",
        city_kazbegi: "ყაზბეგი",
        status_departed: "გავიდა",
        status_closed: "დახურულია",
        btn_select: "არჩევა",
        seats_free: "ადგილია",
        modal_title: "ჯავშნის დეტალები",
        modal_seats: "რაოდენობა",
        option_window: "ფანჯარასთან",
        modal_route_label: "მარშრუტი",
        btn_confirm: "დადასტურება",
        ph_name: "სახელი",
        ph_phone: "ტელეფონი",
        today: "დღეს",
        tomorrow: "ხვალ",
        alert_success: "ჯავშანი მიღებულია!",
        
        route_tbi_bat: "თბილისი - ბათუმი",
        route_tbi_kut: "თბილისი - ქუთაისი",
        route_tbi_kaz: "თბილისი - ყაზბეგი",
        car_sprinter: "Mercedes Sprinter (თეთრი)",
        car_vito: "Vito VIP (შავი)",
        car_transit: "Ford Transit (კომფორტი)",
        driver_giga: "გიგა",
        driver_mamuka: "მამუკა",
        driver_dato: "დათო"
    }
};

let currentLang = 'ru';
let baseRides = [];
let currentRideId = null; // ID открытого рейса

// --- ЗАГРУЗКА ---
async function fetchRides() {
    const container = document.getElementById('rides-container');
    container.innerHTML = `<div class="text-center py-10 text-gray-400">Поиск рейсов...</div>`;

    const { data, error } = await sb
        .from('rides')
        .select('*')
        .order('time', { ascending: true });

    if (error) {
        console.error('Ошибка:', error);
        container.innerHTML = `<div class="text-center py-10 text-red-400">Ошибка загрузки.</div>`;
        return;
    }

    if (data && data.length > 0) {
        baseRides = data.map(ride => ({
            id: ride.id,
            time: ride.time,
            price: ride.price,
            seats: ride.seats_total,
            booked: ride.seats_booked,
            routeKey: ride.route_key,
            driverKey: ride.driver_key,
            carKey: ride.car_key,
            driverImg: ride.driver_img || "https://randomuser.me/api/portraits/men/32.jpg",
            carImg: ride.car_img || "img/sprinter.jpg",
            telegramId: ride.telegram_id // 🔥 ВАЖНО: Получаем ID для Телеграма
        }));
        renderRides();
    } else {
        container.innerHTML = `<div class="text-center py-10 text-gray-400">Рейсов нет.</div>`;
    }
}

// --- ИНТЕРФЕЙС ---
function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'text-blue-600', 'shadow-sm', 'ring-1', 'ring-black/5');
        btn.classList.add('text-gray-500');
    });
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) {
        activeBtn.classList.remove('text-gray-500');
        activeBtn.classList.add('bg-white', 'text-blue-600', 'shadow-sm', 'ring-1', 'ring-black/5');
    }
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    const nameInput = document.getElementById('p-name');
    const phoneInput = document.getElementById('p-phone');
    if(nameInput) nameInput.placeholder = translations[lang].ph_name;
    if(phoneInput) phoneInput.placeholder = translations[lang].ph_phone;

    initDateTabs(); 
    renderRides();
}

function updateClock() {
    const clockElement = document.getElementById('live-clock');
    if(clockElement) {
        const now = new Date();
        clockElement.innerText = now.toLocaleTimeString('ru-RU');
    }
}
setInterval(updateClock, 1000);

let selectedDateIndex = 0;
function initDateTabs() {
    const tabsContainer = document.getElementById('date-tabs');
    if(!tabsContainer) return;
    tabsContainer.innerHTML = '';
    const now = new Date();
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    for (let i = 0; i < 4; i++) {
        const date = new Date();
        date.setDate(now.getDate() + i);
        let dayName = `${date.getDate()}.${months[date.getMonth()]}`;
        if (i === 0) dayName = translations[currentLang].today;
        if (i === 1) dayName = translations[currentLang].tomorrow;
        const isActive = i === selectedDateIndex;
        const btnClass = isActive ? "bg-blue-600 text-white shadow-md border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50";
        tabsContainer.innerHTML += `
            <button onclick="selectDate(${i})" class="flex-shrink-0 px-6 py-3 rounded-xl border transition duration-200 flex flex-col items-center min-w-[100px] ${btnClass}">
                <span class="text-xs font-medium opacity-80 uppercase">${dayName}</span>
                <span class="font-bold text-lg">${date.getDate()}.${months[date.getMonth()]}</span>
            </button>`;
    }
}

function selectDate(index) {
    selectedDateIndex = index;
    initDateTabs();
    renderRides();
}

function renderRides() {
    const container = document.getElementById('rides-container');
    container.innerHTML = ''; 
    if (baseRides.length === 0) return;

    const now = new Date();
    const currentTotalMinutes = now.getHours() * 60 + now.getMinutes();

    baseRides.forEach(ride => {
        const routeName = translations[currentLang][ride.routeKey] || ride.routeKey;
        const carName = translations[currentLang][ride.carKey] || ride.carKey;
        const driverName = translations[currentLang][ride.driverKey] || ride.driverKey;
        const [rideH, rideM] = ride.time.split(':').map(Number);
        const rideTotalMinutes = rideH * 60 + rideM;
        let status = 'active'; 
        
        if (selectedDateIndex === 0) {
            if (currentTotalMinutes >= rideTotalMinutes) status = 'departed';
            else if (rideTotalMinutes - currentTotalMinutes <= 60) status = 'closed';
        }

        let btnText = translations[currentLang].btn_select;
        let btnClass = "bg-blue-50 text-blue-700 hover:bg-blue-100";
        let btnAction = `onclick="openModal(${ride.id})"`;
        let seatsDisplay = `${ride.seats - ride.booked} ${translations[currentLang].seats_free}`;
        let seatsColor = "text-green-600";

        if (status === 'closed') {
            btnText = translations[currentLang].status_closed;
            btnClass = "bg-gray-100 text-gray-500 cursor-not-allowed";
            btnAction = "";
        } 
        else if (status === 'departed') {
            btnText = translations[currentLang].status_departed;
            btnClass = "bg-gray-200 text-gray-400 cursor-not-allowed";
            btnAction = "";
            seatsDisplay = "—"; 
            seatsColor = "text-gray-400";
        }

        container.innerHTML += `
        <div class="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition duration-300">
            <div class="flex-grow text-center md:text-left w-full">
                <div class="flex items-center justify-center md:justify-start gap-3 mb-1">
                    <span class="text-2xl font-bold text-gray-900">${ride.time}</span>
                </div>
                <h3 class="font-bold text-lg text-gray-800">${routeName}</h3>
                <div class="flex items-center justify-center md:justify-start gap-3 mt-2">
                    <img src="${ride.driverImg}" class="w-8 h-8 rounded-full border border-gray-200 object-cover" alt="driver">
                    <div class="text-left">
                        <p class="text-xs font-bold text-gray-800">${driverName}</p>
                        <p class="text-xs text-gray-500">${carName}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-row md:flex-col items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                <div class="text-right">
                    <span class="block text-2xl font-bold text-gray-900">${ride.price} ₾</span>
                    <span class="block text-xs font-medium ${seatsColor}">${seatsDisplay}</span>
                </div>
                <button ${btnAction} class="px-8 py-3 rounded-xl font-bold transition w-full md:w-auto ${btnClass}">${btnText}</button>
            </div>
        </div>`;
    });
}

// --- МОДАЛКА И БРОНЬ ---
let selectedSeats = 1;
function openModal(id) {
    currentRideId = id; // Запоминаем ID рейса
    const ride = baseRides.find(r => r.id === id);
    if (!ride) return;
    
    const routeName = translations[currentLang][ride.routeKey] || ride.routeKey;
    const carName = translations[currentLang][ride.carKey] || ride.carKey;
    const driverName = translations[currentLang][ride.driverKey] || ride.driverKey;

    document.getElementById('modal-route').innerText = routeName;
    document.getElementById('modal-time').innerText = ride.time;
    document.getElementById('modal-driver-name').innerText = driverName;
    document.getElementById('modal-car-name').innerText = carName;
    document.getElementById('modal-car-img').src = ride.carImg;
    document.getElementById('modal-driver-img').src = ride.driverImg;

    selectedSeats = 1;
    document.getElementById('seat-count').innerText = 1;
    document.getElementById('window-seat').checked = false;
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() { document.getElementById('modal').classList.add('hidden'); }
function changeSeats(delta) {
    let newVal = selectedSeats + delta;
    if (newVal >= 1 && newVal <= 5) { selectedSeats = newVal; document.getElementById('seat-count').innerText = newVal; }
}
function scrollToResults() { document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' }); }

// --- 🔥 ГЛАВНАЯ ФУНКЦИЯ: СПИСАНИЕ + ТЕЛЕГРАМ ---
async function confirmBooking() {
    const name = document.getElementById('p-name').value;
    const phone = document.getElementById('p-phone').value;
    const confirmBtn = document.querySelector('button[onclick="confirmBooking()"]');
    const isWindow = document.getElementById('window-seat').checked ? "Да" : "Нет";

    // 1. Проверка
    if (!name || !phone) { alert("Введите имя и телефон!"); return; }
    if (phone.length < 9) { alert("Неверный формат номера!"); return; }
    if (!currentRideId) return;

    const ride = baseRides.find(r => r.id === currentRideId);
    if (ride.seats - ride.booked < selectedSeats) {
        alert("Места уже заняты!");
        return;
    }

    // 2. Блокируем кнопку
    confirmBtn.disabled = true;
    confirmBtn.innerText = "Загрузка...";

    // 3. Обновляем Supabase
    const newBookedCount = ride.booked + selectedSeats;
    const { error } = await sb
        .from('rides')
        .update({ seats_booked: newBookedCount })
        .eq('id', currentRideId);

    if (error) {
        console.error("Ошибка:", error);
        alert("Ошибка сети. Попробуйте позже.");
        confirmBtn.disabled = false;
        confirmBtn.innerText = "Подтвердить";
        return;
    }

    // 4. Шлем в ТЕЛЕГРАМ 🚀
    if (ride.telegramId) {
        const routeText = translations['ru'][ride.routeKey] || ride.routeKey;
        const msg = `🔔 *НОВЫЙ ЗАКАЗ (GeoBus)*\n\n🚌 Рейс: ${routeText}\n🕒 Время: ${ride.time}\n👤 Пассажир: ${name}\n📞 Тел: ${phone}\n💺 Мест: ${selectedSeats}\n🪟 У окна: ${isWindow}\n💰 Сумма: ${ride.price * selectedSeats} ₾`;
        
        // Отправляем запрос боту
        const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${ride.telegramId}&text=${encodeURIComponent(msg)}&parse_mode=Markdown`;
        
        try {
            await fetch(url);
        } catch (e) {
            console.error("Ошибка Телеграм:", e);
        }
    }

    // 5. Финал
    alert(translations[currentLang].alert_success);
    closeModal();
    fetchRides(); // Обновляем экран
    
    // Чистим поля
    document.getElementById('p-name').value = '';
    document.getElementById('p-phone').value = '';
    confirmBtn.disabled = false;
    confirmBtn.innerText = "Подтвердить";
}

document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    changeLanguage('ru');
    fetchRides();
});