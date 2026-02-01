// Projects page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Projects page loaded');
    
    // Project data - you can customize this
    const projectsData = [
        {
            id: 1,
            title: 'Numerical method solver',
            icon: 'fas fa-brain',
            link: 'https://github.com/AbhishekDubey3490/Numerical_Methods_Solver_cpp/blob/main/numerical_method.cpp',
            category: 'C'
        },
        {
            id: 2,
            title: 'Django Web App',
            icon: 'fas fa-code',
            link: 'https://github.com/AbhishekDubey3490/Library_Management_System_python/blob/main/Library.py',
            category: 'Web Development'
        },
        {
            id: 3,
            title: 'Car Market Analysis',
            icon: 'fas fa-chart-line',
            link: 'https://github.com/AbhishekDubey3490/Car_Market_Analysis/blob/main/Vehicle_sales_analysis.ipynb',
            category: 'Data Analysis'
        },
        {
            id: 4,
            title: 'House Price Prediction',
            icon: 'fas fa-robot',
            link: 'https://github.com/AbhishekDubey3490/house_cost_prediction/blob/main/house_price_prediction.ipynb',
            category: 'Machine Learning'
        },
        {
            id: 5,
            title: 'Parameter Optimization',
            icon: 'fas fa-wrench',
            link: 'https://github.com/AbhishekDubey3490/WIRE_EDM_ML/blob/main/wire_EDM_Inconel.ipynb',
            category: 'Optimization'
        },
        {
            id: 6,
            title: 'Parameter Prediction',
            icon: 'fas fa-industry',
            link: '#',
            category: 'Prediction'
        }
    ];
    
    // Initialize projects
    function initializeProjects() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach((card, index) => {
            if (projectsData[index]) {
                const project = projectsData[index];
                
                // Update project links with actual data
                const link = card.querySelector('.project-link');
                if (link) {
                    link.href = project.link;
                    link.textContent = `View ${project.category} Project`;
                }
                
                // Add data attribute for filtering
                card.setAttribute('data-category', project.category);
                
                // Add click event for mobile devices
                card.addEventListener('click', function(e) {
                    // On mobile, toggle flip on click instead of hover
                    if (window.innerWidth <= 768) {
                        e.stopPropagation();
                        this.classList.toggle('flipped');
                    }
                });
            }
        });
    }
    
    initializeProjects();
    
    // Project filtering functionality (optional enhancement)
    function addFilterButtons() {
        const filterContainer = document.createElement('div');
        filterContainer.className = 'project-filters';
        filterContainer.innerHTML = `
            <button class="filter-btn active" data-filter="all">All Projects</button>
            <button class="filter-btn" data-filter="AI/ML">AI/ML</button>
            <button class="filter-btn" data-filter="Web Development">Web Dev</button>
            <button class="filter-btn" data-filter="Data Analysis">Data Analysis</button>
            <button class="filter-btn" data-filter="Automation">Automation</button>
            <button class="filter-btn" data-filter="Database">Database</button>
        `;
        
        const projectsContainer = document.querySelector('.projects-container');
        if (projectsContainer && projectsContainer.parentNode) {
            projectsContainer.parentNode.insertBefore(filterContainer, projectsContainer);
            
            // Add filter functionality
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    const projectCards = document.querySelectorAll('.project-card');
                    
                    // Filter projects
                    projectCards.forEach(card => {
                        if (filter === 'all' || card.getAttribute('data-category') === filter) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 10);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
        }
    }
    
    // Add animation to projects on scroll
    function animateProjectsOnScroll() {
        const projectCards = document.querySelectorAll('.project-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }, {
            threshold: 0.1
        });
        
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    }
    
    animateProjectsOnScroll();
});