// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const dashboardContent = document.getElementById('dashboardContent');
    const comingSoonContent = document.getElementById('comingSoonContent');
    const comingSoonText = document.getElementById('comingSoonText');
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');

    // Page configurations
    const pages = {
        dashboard: {
            title: 'Dashboard',
            subtitle: 'Manage your electrical contracting operations.',
            showDashboard: true
        },
        projects: {
            title: 'Projects',
            subtitle: 'Projects section is under development',
            showDashboard: false
        },
        billing: {
            title: 'Billing & Invoicing',
            subtitle: 'Billing & Invoicing section is under development',
            showDashboard: false
        },
        accounts: {
            title: 'Accounts & Finance',
            subtitle: 'Accounts & Finance section is under development',
            showDashboard: false
        },
        expenses: {
            title: 'Expenses',
            subtitle: 'Expenses section is under development',
            showDashboard: false
        },
        inventory: {
            title: 'Inventory',
            subtitle: 'Inventory section is under development',
            showDashboard: false
        },
        labour: {
            title: 'Labour & HR',
            subtitle: 'Labour & HR section is under development',
            showDashboard: false
        },
        dailywork: {
            title: 'Daily Work',
            subtitle: 'Daily Work section is under development',
            showDashboard: false
        },
        users: {
            title: 'Users',
            subtitle: 'Users section is under development',
            showDashboard: false
        }
    };

    // Handle navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            const config = pages[page];

            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update header
            pageTitle.textContent = config.title;
            pageSubtitle.textContent = config.subtitle;

            // Show/hide content
            if (config.showDashboard) {
                dashboardContent.style.display = 'block';
                comingSoonContent.style.display = 'none';
            } else {
                dashboardContent.style.display = 'none';
                comingSoonContent.style.display = 'flex';
                comingSoonText.textContent = config.subtitle;
            }

            // Scroll to top
            document.querySelector('.main-content').scrollTop = 0;
        });
    });

    // Add hover effects to metric cards
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add hover effects to alert cards
    const alertCards = document.querySelectorAll('.alert-card');
    alertCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Handle alert card links
    const alertLinks = document.querySelectorAll('.alert-link');
    alertLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // Determine which nav item to activate based on the link
            let targetPage = 'dashboard';
            if (href.includes('inventory') || link.textContent.includes('Inventory')) {
                targetPage = 'inventory';
            } else if (href.includes('billing') || link.textContent.includes('Billing')) {
                targetPage = 'billing';
            }

            // Find and click the corresponding nav item
            const targetNav = document.querySelector(`[data-page="${targetPage}"]`);
            if (targetNav) {
                targetNav.click();
            }
        });
    });

    // Quick Action button functionality
    const quickActionBtn = document.querySelector('.quick-action-btn');
    quickActionBtn.addEventListener('click', () => {
        alert('Quick Action menu would open here. This is where you can add new projects, create invoices, or perform other quick tasks.');
    });

    // Notification button functionality
    const notificationBtn = document.querySelector('.notification-btn');
    notificationBtn.addEventListener('click', () => {
        alert('Notifications panel would open here. You would see system notifications, reminders, and updates.');
    });

    // Settings button functionality
    const settingsBtn = document.querySelector('.settings-btn');
    settingsBtn.addEventListener('click', () => {
        alert('User settings panel would open here. You can manage your profile, preferences, and account settings.');
    });

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Log page load
    console.log('Tirth Electrical Services Dashboard loaded successfully');
    console.log('Navigation is fully functional');
    console.log('All interactive elements are working');
});