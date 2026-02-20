// ========================================
// الأكيل - Restaurant Website JavaScript
// ========================================

// ========== Menu Data (with sizes) ==========
const menuData = [

    // ===== السندوتشات =====
    {
        id: 'S1',
        name: 'خدمة أبشر',
       
        description: 'البوابة الإلكترونية الشاملة لوزارة الداخلية السعودية،',
        image: 'imgs/Services/1.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S2',
        name: 'منصة قوى',
        description: ' منصة رقمية شاملةخدمة الموارد البشرية',
        image: 'imgs/Services/2.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S3',
        name: 'خدمة التأهيل الشامل',
        description: 'منظومة الدعم المالي والتأهيل المهني والإجتماعي',
        image: 'imgs/Services/3.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S4',
        name: 'نظام الضمان الإجتماعي المتطور',
        description: 'نظام الضمان المالي والدعم الأسري',
        image: 'imgs/Services/4.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S5',
        name: 'نظام نور',
        description: 'كل ما يخص تقديم الطلاب وتنقل الطلاب',
        image: 'imgs/Services/5.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S6',
        name: 'نظام الأسر المنتجة',
        description: 'نظام تحويل مهارات العائلات الى مشاريع تجارية',
        image: 'imgs/Services/6.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
   {
        id: 'S7',
        name: 'اصدار رخصة بلدي',
        description: 'اصدار رخصة بلدي',
        image: 'imgs/Services/7.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
   {
        id: 'S8',
        name: 'اصدار سجل تجاري',
        description: 'اصدار سجل تجاري',
        image: 'imgs/Services/8.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S9',
        name: 'نقل كفالة',
        description: 'نقل كفالة',
        image: 'imgs/Services/9.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S10',
        name: 'تخليص أوراق جمركية',
        description: 'تخليص أوراق جمركية',
        image: 'imgs/Services/10.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S11',
        name: 'تحويل زيارات الإقامة',
        description: 'تحويل زيارات الإقامة',
        image: 'imgs/Services/11.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S12',
        name: 'إصدار التأشيرات',
        description: 'إصدار التأشيرات',
        image: 'imgs/Services/12.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S13',
        name: 'إلغاء بلاغ الهروب',
        description: 'إلغاء بلاغ الهروب',
        image: 'imgs/Services/13.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S14',
        name: 'تخليص موافقة زواج سعودي من أجنبية',
        description: 'تخليص موافقة زواج سعودي من أجنبية',
        image: 'imgs/Services/14.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S15',
        name: 'إصدار الإقامات',
        description: 'إصدار الإقامات',
        image: 'imgs/Services/15.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S16',
        name: 'نقل بيانات جواز',
        description: 'نقل بيانات جواز',
        image: 'imgs/Services/16.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
    {
        id: 'S17',
        name: 'اصدار وكالة',
        description: 'اصدار وكالة',
        image: 'imgs/Services/17.png',
        sizes: [
            { label: '',       short: '',  price: 'على حسب' },

        ]
    },
   
];

// ========== Initialize AOS ==========
AOS.init({ duration: 1000, once: true, offset: 100 });

// ========== Navbar Scroll Effect ==========
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    navbar.classList.toggle('scrolled', window.scrollY > 100);
});

// ========== Active Navigation Link ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 200) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) link.classList.add('active');
    });
});

// ========== Smooth Scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - document.querySelector('.navbar').offsetHeight, behavior: 'smooth' });
            const nc = document.querySelector('.navbar-collapse');
            if (nc.classList.contains('show')) nc.classList.remove('show');
        }
    });
});

// ========== Render Menu Items ==========
function renderMenuItems(items) {
    const menuGrid  = document.getElementById('menuGrid');
    const noResults = document.getElementById('noResults');
    menuGrid.innerHTML = '';

    if (items.length === 0) { noResults.style.display = 'block'; return; }
    noResults.style.display = 'none';

    items.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'menu-item';
        el.setAttribute('data-aos', 'fade-up');
        el.setAttribute('data-aos-delay', (index % 6) * 100);

        const defaultSize = item.sizes[0];
        const hasMulti    = item.sizes.length > 1;

        const sizeCells = item.sizes.map((s, i) =>
            `<div class="size-cell ${i === 0 ? 'selected' : ''}"
                  onclick="selectSize(this, '${item.name}', '${s.label}', ${s.price})"
                  title="${s.label}"
                  data-name="${item.name}" data-size="${s.label}" data-price="${s.price}">
                <span class="sc-short">${s.short || s.label}</span>
                <span class="sc-price">${s.price}<span class="sc-unit">﷼</span></span>
             </div>`
        ).join('');

        el.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="menu-item-code">كود: ${item.id}</span>
             
            </div>
            <div class="menu-item-content">
                <h4 class="menu-item-title">${item.name}</h4>
                <p class="menu-item-description">${item.description}</p>

                <div class="sizes-grid">${sizeCells}</div>

                <button class="order-btn w-100 mt-3"
                    data-name="${item.name}"
                    data-size="${defaultSize.label}"
                    data-price="${defaultSize.price}"
                    onclick="orderSelectedItem(this)">
                     اطلب الآن
                </button>
            </div>`;

        menuGrid.appendChild(el);
    });

    AOS.refresh();
}

// ========== Select Size ==========
function selectSize(cell, itemName, sizeLabel, price) {
    cell.closest('.sizes-grid').querySelectorAll('.size-cell').forEach(c => c.classList.remove('selected'));
    cell.classList.add('selected');
    const btn = cell.closest('.menu-item').querySelector('.order-btn');
    btn.dataset.name  = itemName;
    btn.dataset.size  = sizeLabel;
    btn.dataset.price = price;
}

// ========== Order via WhatsApp ==========
function orderSelectedItem(btn) {
    const msg = `مرحباً، أود طلب:\n• ${btn.dataset.name} - ${btn.dataset.size}\n• السعر: ${btn.dataset.price} ريال`;
    window.open(`https://wa.me/966570595003?text=${encodeURIComponent(msg)}`, '_blank');
}

function orderItem(itemName, price) {
    const msg = `مرحباً، أود طلب: ${itemName} بسعر ${price} ريال`;
    window.open(`https://wa.me/966570595003?text=${encodeURIComponent(msg)}`, '_blank');
}

// ========== Filter & Search ==========
let currentFilter = 'all';

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        currentFilter = this.getAttribute('data-filter');
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        applyFilterAndSearch();
    });
});

document.getElementById('menuSearch').addEventListener('input', applyFilterAndSearch);

function applyFilterAndSearch() {
    const term = document.getElementById('menuSearch').value.toLowerCase();
    let filtered = currentFilter === 'all' ? menuData : menuData.filter(i => i.category === currentFilter);
    if (term) filtered = filtered.filter(i => i.name.toLowerCase().includes(term) || i.description.toLowerCase().includes(term));
    renderMenuItems(filtered);
}

// ========== Back to Top ==========
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => backToTopBtn.classList.toggle('show', window.pageYOffset > 300));
backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ========== Init ==========
document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems(menuData);
    new bootstrap.Carousel(document.getElementById('heroCarousel'), { interval: 5000, pause: 'hover' });
});

// ========== Lazy Load ==========
if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    document.querySelectorAll('img[loading="lazy"]').forEach(img => obs.observe(img));
}

console.log('%c🍽️ مرحباً بك في موقع الأكيل! 🍽️', 'color: #dc3545; font-size: 20px; font-weight: bold;');
