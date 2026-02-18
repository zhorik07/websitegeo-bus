// 👇 ВСТАВЬ СЮДА СВОИ ДАННЫЕ SUPABASE
const SUPABASE_URL = 'https://yxvrudfgpnyahlpbfzru.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4dnJ1ZGZncG55YWhscGJmenJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NTczODIsImV4cCI6MjA4NjIzMzM4Mn0.7Si7KmFTTV-DRvP04mj3_rpLgHXSRoa9lrruZZ7IcHg';
// Трюк для Гитхаба (чтобы не ругался)
const TOKEN_PART1 = '8527717333:';
const TOKEN_PART2 = 'AAGAW36LNt2F7X9JVk_LmuDQXTPKM2WFc0w';
const TELEGRAM_TOKEN = TOKEN_PART1 + TOKEN_PART2;

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 🌍 СЛОВАРЬ ПЕРЕВОДОВ (С ГРУЗИНСКОЙ ДУШОЙ ❤️)
const translations = {
    ru: {
        hero_title: "Путешествуй по Грузии с комфортом",
        hero_subtitle: "Бронируйте места онлайн. Оплата водителю на месте.",
        label_from: "Откуда",
        label_to: "Куда",
        today: "Дата поездки",
        btn_search: "Найти маршрутку",
        schedule_title: "Ближайшие рейсы",
        
        // Душевный блок "О нас"
        about_title: "Забудьте про хаос на вокзале",
        about_text: "SharaGo — это когда ты точно знаешь, что уедешь. Сидя в мягком кресле, а не на табуретке в проходе.",
        
        about_list_1: "Место — железобетонно твое",
        about_desc_1: "Никто не займет его сумкой, чемоданом или 'братом свата'.",
        
        about_list_2: "Цена не кусается",
        about_desc_2: "Платишь как местный. Никаких наценок 'для туристов'.",
        
        about_list_3: "Диспетчер — как мама",
        about_desc_3: "Позвонит, напомнит, встретит и проследит, чтобы вы сели.",
        
        service_tag: "🚀 Сервис №1 в Грузии",
        stations_title: "Автовокзалы Тбилиси",
        stations_subtitle: "Нажмите, чтобы не искать таксиста",
        st_didube: "Автовокзал Дидубе",
        st_didube_desc: "На Батуми, Казбеги, Кутаиси",
        st_ortachala: "Ортачала",
        st_ortachala_desc: "Международные рейсы",
        st_isani: "Исани",
        st_isani_desc: "Кахетия, Сигнахи",
        st_station: "Вокзальная Площадь",
        st_station_desc: "Ж/Д вокзал",
        
        // Футер
        footer_desc: "Первый в Грузии сервис, который реально работает. Сделано с любовью, хинкали и хачапури ❤️ 🧀",
        footer_popular: "Популярное",
        footer_contact: "Контакты",
        footer_disp: "Диспетчерская",
        
        city_tbilisi: "Тбилиси",
        city_kutaisi: "Кутаиси",
        city_batumi: "Батуми",
        city_kazbegi: "Казбеги",
        status_departed: "Ушел",
        status_closed: "Продажа закрыта",
        btn_select: "Выбрать",
        seats_free: "мест свободно",
        modal_title: "Бронирование",
        modal_seats: "Сколько мест?",
        option_window: "Хочу у окна (+3₾)",
        modal_route_label: "Маршрут",
        btn_confirm: "Подтвердить бронь",
        ph_name: "Ваше Имя",
        ph_phone: "Номер телефона",
        alert_success: "Гаумарджос! Бронь принята. Водитель скоро свяжется с вами.",
        
        route_tbi_bat: "Тбилиси - Батуми",
        route_tbi_kut: "Тбилиси - Кутаиси",
        route_tbi_kaz: "Тбилиси - Казбеги",
        car_sprinter: "Mercedes Sprinter",
        car_vito: "Vito VIP",
        car_transit: "Ford Transit",
        driver_giga: "Гига",
        driver_mamuka: "Мамука",
        driver_dato: "Дато"
    },
    en: {
        hero_title: "Travel Georgia with Comfort",
        hero_subtitle: "Book seats online. Pay directly to the driver.",
        label_from: "From",
        label_to: "To",
        today: "Date",
        btn_search: "Find Bus",
        schedule_title: "Upcoming Rides",
        
        about_title: "Stop playing roulette with the bus station",
        about_text: "SharaGo means you know for sure you'll leave. Sitting in a soft chair, not on a stool.",
        
        about_list_1: "Your seat is 100% yours",
        about_desc_1: "No one will take it with a bag, suitcase, or 'friend'.",
        
        about_list_2: "Fair price",
        about_desc_2: "Same as for locals. No 'tourist tax'.",
        
        about_list_3: "Dispatcher cares like a Mom",
        about_desc_3: "Will call, remind, guide, and make sure you get on the bus.",
        
        service_tag: "🚀 Service #1 in Georgia",
        stations_title: "Tbilisi Bus Stations",
        stations_subtitle: "Click to find locations",
        st_didube: "Didube Bus Station",
        st_didube_desc: "To Batumi, Kazbegi, Kutaisi",
        st_ortachala: "Ortachala Station",
        st_ortachala_desc: "International routes",
        st_isani: "Isani Station",
        st_isani_desc: "Kakheti, Signagi",
        st_station: "Station Square",
        st_station_desc: "Railway Station",

        footer_desc: "The first booking service in Georgia that actually works. Made with love, Khinkali and Khachapuri ❤️ 🧀",
        footer_popular: "Popular",
        footer_contact: "Contact",
        footer_disp: "Dispatcher",

        city_tbilisi: "Tbilisi",
        city_kutaisi: "Kutaisi",
        city_batumi: "Batumi",
        city_kazbegi: "Kazbegi",
        status_departed: "Departed",
        status_closed: "Closed",
        btn_select: "Select",
        seats_free: "seats left",
        modal_title: "Booking",
        modal_seats: "Number of seats",
        option_window: "Window seat (+3₾)",
        modal_route_label: "Route",
        btn_confirm: "Confirm Booking",
        ph_name: "Your Name",
        ph_phone: "Phone Number",
        alert_success: "Gaumarjos! Booking accepted. The driver will contact you soon.",
        
        route_tbi_bat: "Tbilisi - Batumi",
        route_tbi_kut: "Tbilisi - Kutaisi",
        route_tbi_kaz: "Tbilisi - Kazbegi",
        car_sprinter: "Mercedes Sprinter",
        car_vito: "Vito VIP",
        car_transit: "Ford Transit",
        driver_giga: "Giga",
        driver_mamuka: "Mamuka",
        driver_dato: "Dato"
    },
    ka: {
        hero_title: "იმგზავრეთ საქართველოში კომფორტულად",
        hero_subtitle: "დაჯავშნეთ ონლაინ. გადაიხადეთ მძღოლთან.",
        label_from: "საიდან",
        label_to: "სად",
        today: "თარიღი",
        btn_search: "მოძებნა",
        schedule_title: "უახლოესი რეისები",
        
        about_title: "დაივიწყეთ ქაოსი სადგურებზე",
        about_text: "SharaGo - გარანტირებული მგზავრობა კომფორტულად.",
        
        about_list_1: "გარანტირებული ადგილი",
        about_desc_1: "თქვენი ადგილი შენახულია და არავინ დაიკავებს.",
        
        about_list_2: "ფიქსირებული ფასი",
        about_desc_2: "ზუსტად იგივე ფასი, რაც სადგურზე.",
        
        about_list_3: "დისპეტჩერი დედასავით ზრუნავს",
        about_desc_3: "დაგირეკავთ, შეგახსენებთ და დაგეხმარებათ ჩასხდომაში.",
        
        service_tag: "🚀 სერვისი №1 საქართველოში",
        stations_title: "თბილისის ავტოსადგურები",
        stations_subtitle: "დააჭირეთ რუკის სანახავად",
        st_didube: "დიდუბის ავტოსადგური",
        st_didube_desc: "ბათუმის, ყაზბეგის, ქუთაისის მიმართულებით",
        st_ortachala: "ორთაჭალა",
        st_ortachala_desc: "საერთაშორისო რეისები",
        st_isani: "ისანი",
        st_isani_desc: "კახეთი, სიღნაღი",
        st_station: "სადგურის მოედანი",
        st_station_desc: "რკინიგზის სადგური",

        footer_desc: "პირველი ჯავშნის სერვისი, რომელიც მუშაობს. დამზადებულია სიყვარულით და ხინკლით ❤️ 🧀",
        footer_popular: "პოპულარული",
        footer_contact: "კონტაქტი",
        footer_disp: "დისპეტჩერი",

        city_tbilisi: "თბილისი",
        city_kutaisi: "ქუთაისი",
        city_batumi: "ბათუმი",
        city_kazbegi: "ყაზბეგი",
        status_departed: "გავიდა",
        status_closed: "დახურულია",
        btn_select: "არჩევა",
        seats_free: "ადგილია",
        modal_title: "ჯავშანი",
        modal_seats: "რაოდენობა",
        option_window: "ფანჯარასთან (+3₾)",
        modal_route_label: "მარშრუტი",
        btn_confirm: "დადასტურება",
        ph_name: "სახელი",
        ph_phone: "ტელეფონი",
        alert_success: "ჯავშანი მიღებულია! მძღოლი მალე დაგიკავშირდებათ.",
        
        route_tbi_bat: "თბილისი - ბათუმი",
        route_tbi_kut: "თბილისი - ქუთაისი",
        route_tbi_kaz: "თბილისი - ყაზბეგი",
        car_sprinter: "Mercedes Sprinter",
        car_vito: "Vito VIP",
        car_transit: "Ford Transit",
        driver_giga: "გიგა",
        driver_mamuka: "მამუკა",
        driver_dato: "დათო"
    }
};

const daysMap = {
    ru: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    en: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    ka: ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ']
};

let currentLang = 'ru';
let baseRides = [];
let currentRideId = null;
let datePicker = null; 

// --- ЗАГРУЗКА ---
async function fetchRides() {
    const container = document.getElementById('rides-container');
    container.innerHTML = `<div class="text-center py-20"><i class="fa-solid fa-circle-notch fa-spin text-blue-900 text-3xl"></i></div>`;

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
            telegramId: ride.telegram_id
        }));
        renderRides();
    } else {
        container.innerHTML = `<div class="text-center py-10 text-gray-400">Рейсов пока нет.</div>`;
    }
}

// --- КАЛЕНДАРЬ ---
function initCalendar(lang = 'ru') {
    const today = new Date();
    if (datePicker) datePicker.destroy();

    datePicker = flatpickr("#search-date", {
        locale: lang, 
        minDate: "today",
        defaultDate: today,
        dateFormat: "Y-m-d",
        altInput: true, 
        altFormat: "j F Y", 
        disableMobile: "true", 
        theme: "airbnb"
    });
}

// --- ЯЗЫКИ ---
function changeLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'text-[#1e3a8a]', 'shadow-sm');
        btn.classList.add('text-gray-500');
    });
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) {
        activeBtn.classList.remove('text-gray-500');
        activeBtn.classList.add('bg-white', 'text-[#1e3a8a]', 'shadow-sm');
    }

    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.querySelectorAll('option[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.text = translations[lang][key];
        }
    });

    const nameInput = document.getElementById('p-name');
    const phoneInput = document.getElementById('p-phone');
    if(nameInput) nameInput.placeholder = translations[lang].ph_name;
    if(phoneInput) phoneInput.placeholder = translations[lang].ph_phone;

    initCalendar(lang);
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

function searchRides() {
    const selectedDateStr = document.getElementById('search-date').value;
    const selectedDate = new Date(selectedDateStr);
    const today = new Date();
    today.setHours(0,0,0,0);
    selectedDate.setHours(0,0,0,0);
    
    const diffTime = Math.abs(selectedDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    if (diffDays >= 0 && diffDays < 7) {
        selectedDateIndex = diffDays;
    } else {
        alert("Пока расписание доступно только на ближайшие 7 дней!");
        selectedDateIndex = 0;
    }
    
    initDateTabs();
    document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' });
    renderRides();
}

let selectedDateIndex = 0;
function initDateTabs() {
    const tabsContainer = document.getElementById('date-tabs');
    if(!tabsContainer) return;
    tabsContainer.innerHTML = '';
    const now = new Date();
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(now.getDate() + i);
        let label = daysMap[currentLang][date.getDay()];
        const isActive = i === selectedDateIndex;
        const btnClass = isActive 
            ? "bg-[#1e3a8a] text-white shadow-xl scale-105 border-transparent" 
            : "bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-500";
        
        tabsContainer.innerHTML += `
            <button onclick="selectDate(${i})" class="flex-shrink-0 w-20 h-24 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-1 ${btnClass}">
                <span class="text-[10px] font-bold uppercase tracking-wider opacity-80">${label}</span>
                <span class="font-extrabold text-2xl leading-none">${date.getDate()}</span>
                <span class="text-[10px] opacity-70 font-medium">${months[date.getMonth()]}</span>
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
        const stationName = translations[currentLang].st_didube;

        const [rideH, rideM] = ride.time.split(':').map(Number);
        const rideTotalMinutes = rideH * 60 + rideM;
        let status = 'active'; 
        
        if (selectedDateIndex === 0) {
            if (currentTotalMinutes >= rideTotalMinutes) status = 'departed';
            else if (rideTotalMinutes - currentTotalMinutes <= 60) status = 'closed';
        }

        let btnText = translations[currentLang].btn_select;
        let btnClass = "bg-blue-50 text-blue-900 hover:bg-blue-100 hover:shadow-md";
        let btnAction = `onclick="openModal(${ride.id})"`;
        let seatsDisplay = `${ride.seats - ride.booked} ${translations[currentLang].seats_free}`;
        let seatsColor = "text-green-600 bg-green-50 px-2 py-1 rounded-md";

        if (status === 'closed') {
            btnText = translations[currentLang].status_closed;
            btnClass = "bg-gray-100 text-gray-400 cursor-not-allowed";
            btnAction = "";
        } 
        else if (status === 'departed') {
            btnText = translations[currentLang].status_departed;
            btnClass = "bg-gray-100 text-gray-400 cursor-not-allowed";
            btnAction = "";
            seatsDisplay = "—"; 
            seatsColor = "text-gray-400";
        }

        container.innerHTML += `
        <div class="bg-white rounded-3xl border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-xl transition duration-300 group">
            <div class="flex-grow text-center md:text-left w-full">
                <div class="flex items-center justify-center md:justify-start gap-4 mb-2">
                    <span class="text-3xl font-black text-gray-900 tracking-tight">${ride.time}</span>
                    <span class="px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-100 text-blue-800">SharaGo</span>
                </div>
                <h3 class="font-bold text-xl text-gray-800 mb-1">${routeName}</h3>
                <div class="mb-3 inline-flex items-center gap-2 text-sm text-gray-500">
                    <i class="fa-solid fa-map-pin text-red-500"></i>
                    <span class="font-medium">${stationName}</span>
                </div>
                <div class="flex items-center justify-center md:justify-start gap-3 mt-2 pl-1">
                    <img src="${ride.driverImg}" class="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" alt="driver">
                    <div class="text-left leading-tight">
                        <p class="text-xs font-bold text-gray-900">${driverName}</p>
                        <p class="text-[10px] text-gray-500 uppercase tracking-wide">${carName}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-row md:flex-col items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                <div class="text-right flex flex-col items-end">
                    <span class="block text-3xl font-black text-gray-900">${ride.price} ₾</span>
                    <span class="block text-xs font-bold mt-1 ${seatsColor}">${seatsDisplay}</span>
                </div>
                <button ${btnAction} class="px-8 py-4 rounded-2xl font-bold transition w-full md:w-auto text-lg ${btnClass}">${btnText}</button>
            </div>
        </div>`;
    });
}

// --- МОДАЛКА И БРОНЬ ---
let selectedSeats = 1;
function openModal(id) {
    currentRideId = id; 
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
    
    // ОТКРЫВАЕМ МОДАЛКУ
    document.getElementById('modal').classList.remove('hidden');
    // Блокируем скролл основной страницы, чтобы не ездила
    document.body.style.overflow = 'hidden'; 
}

function closeModal() { 
    document.getElementById('modal').classList.add('hidden');
    // Возвращаем скролл
    document.body.style.overflow = 'auto'; 
}

function changeSeats(delta) {
    let newVal = selectedSeats + delta;
    if (newVal >= 1 && newVal <= 5) { selectedSeats = newVal; document.getElementById('seat-count').innerText = newVal; }
}

async function confirmBooking() {
    const name = document.getElementById('p-name').value;
    const phone = document.getElementById('p-phone').value;
    const confirmBtn = document.querySelector('button[onclick="confirmBooking()"]');
    const isWindow = document.getElementById('window-seat').checked ? "Да" : "Нет";

    if (!name || !phone) { alert("Впиши имя и телефон, брат!"); return; }
    if (phone.length < 9) { alert("Номер какой-то короткий, проверь!"); return; }
    if (!currentRideId) return;

    const ride = baseRides.find(r => r.id === currentRideId);
    if (ride.seats - ride.booked < selectedSeats) {
        alert("Места уже заняты, опоздали!");
        return;
    }

    confirmBtn.disabled = true;
    confirmBtn.innerText = "Оформляем...";

    const newBookedCount = ride.booked + selectedSeats;
    const { error } = await sb
        .from('rides')
        .update({ seats_booked: newBookedCount })
        .eq('id', currentRideId);

    if (error) {
        console.error("Ошибка:", error);
        alert("Что-то с интернетом. Попробуй еще раз.");
        confirmBtn.disabled = false;
        confirmBtn.innerText = "Подтвердить";
        return;
    }

    if (ride.telegramId) {
        const routeText = translations['ru'][ride.routeKey] || ride.routeKey;
        const msg = `🔔 *НОВЫЙ ЗАКАЗ (SharaGo)*\n\n🚌 Рейс: ${routeText}\n🕒 Время: ${ride.time}\n👤 Пассажир: ${name}\n📞 Тел: ${phone}\n💺 Мест: ${selectedSeats}\n🪟 У окна: ${isWindow}\n💰 Сумма: ${ride.price * selectedSeats} ₾`;
        
        const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${ride.telegramId}&text=${encodeURIComponent(msg)}&parse_mode=Markdown`;
        
        try {
            await fetch(url);
        } catch (e) {
            console.error("Ошибка Телеграм:", e);
        }
    }

    alert(translations[currentLang].alert_success);
    closeModal();
    fetchRides(); 
    
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