// Updated Player Data with reliable images
const players = [
    {
        name: "Virat Kohli",
        role: "Batsman",
        team: "Royal Challengers Bangalore",
        image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png",
        stats: "Average: 59.32 | Centuries: 30+ | Strike Rate: 92.84",
        recentForm: 95,
        matchFitness: 92,
        price: 12.0
    },
    {
        name: "Rohit Sharma",
        role: "Batsman",
        team: "Mumbai Indians",
        image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
        stats: "Average: 48.96 | Centuries: 25+ | Strike Rate: 89.24",
        recentForm: 88,
        matchFitness: 90,
        price: 11.5
    },
    {
        name: "MS Dhoni",
        role: "Wicket-keeper",
        team: "Chennai Super Kings",
        image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
        stats: "Average: 50.57 | Stumpings: 150+ | Strike Rate: 135.20",
        recentForm: 85,
        matchFitness: 88,
        price: 10.0
    },
    {
        name: "Jasprit Bumrah",
        role: "Bowler",
        team: "Mumbai Indians",
        image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png",
        stats: "Wickets: 180+ | Economy: 6.35 | Strike Rate: 18.5",
        recentForm: 92,
        matchFitness: 95,
        price: 11.0
    },
    {
        name: "Ravindra Jadeja",
        role: "All-rounder",
        team: "Chennai Super Kings",
        image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/9.png",
        stats: "Batting Avg: 35.24 | Wickets: 200+ | Economy: 4.95",
        recentForm: 90,
        matchFitness: 93,
        price: 10.5
    }
];

// Additional players with reliable images
const additionalPlayers = [
    {
        name: "KL Rahul",
        role: "Batsman",
        team: "Lucknow Super Giants",
        image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1125.png",
        stats: "Average: 47.22 | Centuries: 15+ | Strike Rate: 136.37",
        recentForm: 89,
        matchFitness: 91,
        price: 11.0
    },
    {
        name: "Hardik Pandya",
        role: "All-rounder",
        team: "Gujarat Titans",
        image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png",
        stats: "Batting Avg: 31.29 | Wickets: 100+ | Economy: 7.85",
        recentForm: 87,
        matchFitness: 89,
        price: 10.5
    },
    {
        name: "Jos Buttler",
        role: "Wicket-keeper",
        team: "Rajasthan Royals",
        image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png",
        stats: "Average: 42.39 | Strike Rate: 150.82 | Dismissals: 89",
        recentForm: 93,
        matchFitness: 90,
        price: 11.0
    },
    {
        name: "Rashid Khan",
        role: "Bowler",
        team: "Gujarat Titans",
        image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2885.png",
        stats: "Wickets: 150+ | Economy: 6.24 | Strike Rate: 16.5",
        recentForm: 94,
        matchFitness: 92,
        price: 11.5
    },
    {
        name: "Shubman Gill",
        role: "Batsman",
        team: "Gujarat Titans",
        image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png",
        stats: "Average: 45.84 | Strike Rate: 132.93 | Centuries: 8",
        recentForm: 91,
        matchFitness: 93,
        price: 10.0
    }
];

// Combine all players
players.push(...additionalPlayers);

// Updated team logos with reliable sources
const teamLogos = {
    "Mumbai Indians": "https://scores.iplt20.com/ipl/teamlogos/MI.png",
    "Chennai Super Kings": "https://scores.iplt20.com/ipl/teamlogos/CSK.png",
    "Royal Challengers Bangalore": "https://scores.iplt20.com/ipl/teamlogos/RCB.png",
    "Kolkata Knight Riders": "https://scores.iplt20.com/ipl/teamlogos/KKR.png",
    "Delhi Capitals": "https://scores.iplt20.com/ipl/teamlogos/DC.png",
    "Rajasthan Royals": "https://scores.iplt20.com/ipl/teamlogos/RR.png",
    "Punjab Kings": "https://scores.iplt20.com/ipl/teamlogos/PBKS.png",
    "Sunrisers Hyderabad": "https://scores.iplt20.com/ipl/teamlogos/SRH.png",
    "Gujarat Titans": "https://scores.iplt20.com/ipl/teamlogos/GT.png",
    "Lucknow Super Giants": "https://scores.iplt20.com/ipl/teamlogos/LSG.png"
};

// Updated upcoming matches with reliable team logos
const upcomingMatches = [
    {
        id: 1,
        team1: "Mumbai Indians",
        team2: "Chennai Super Kings",
        date: "2025-03-28T19:30:00",
        venue: "Wankhede Stadium",
        team1Logo: teamLogos["Mumbai Indians"],
        team2Logo: teamLogos["Chennai Super Kings"],
        pitchCondition: "Batting friendly",
        weather: "Clear"
    },
    {
        id: 2,
        team1: "Royal Challengers Bangalore",
        team2: "Kolkata Knight Riders",
        date: "2025-03-29T19:30:00",
        venue: "M. Chinnaswamy Stadium",
        team1Logo: teamLogos["Royal Challengers Bangalore"],
        team2Logo: teamLogos["Kolkata Knight Riders"],
        pitchCondition: "Balanced",
        weather: "Partly cloudy"
    },
    {
        id: 3,
        team1: "Delhi Capitals",
        team2: "Rajasthan Royals",
        date: "2025-03-30T15:30:00",
        venue: "Arun Jaitley Stadium",
        team1Logo: teamLogos["Delhi Capitals"],
        team2Logo: teamLogos["Rajasthan Royals"],
        pitchCondition: "Spin friendly",
        weather: "Clear"
    }
];

// Latest Match Results data
const latestMatchResults = [
    {
        id: 1,
        team1: {
            name: "Mumbai Indians",
            logo: teamLogos["Mumbai Indians"],
            score: "204/5",
            overs: "20.0"
        },
        team2: {
            name: "Royal Challengers Bangalore",
            logo: teamLogos["Royal Challengers Bangalore"],
            score: "196/8",
            overs: "20.0"
        },
        result: "Mumbai Indians won by 8 runs",
        venue: "Wankhede Stadium",
        date: "2025-03-26T19:30:00",
        motm: {
            name: "Rohit Sharma",
            performance: "92(56)",
            image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png"
        },
        highlights: [
            "Rohit Sharma's explosive 92",
            "3 wickets by Jasprit Bumrah",
            "Fighting 76 by Virat Kohli"
        ]
    },
    {
        id: 2,
        team1: {
            name: "Chennai Super Kings",
            logo: teamLogos["Chennai Super Kings"],
            score: "189/4",
            overs: "20.0"
        },
        team2: {
            name: "Kolkata Knight Riders",
            logo: teamLogos["Kolkata Knight Riders"],
            score: "184/6",
            overs: "20.0"
        },
        result: "Chennai Super Kings won by 5 runs",
        venue: "M. A. Chidambaram Stadium",
        date: "2025-03-25T19:30:00",
        motm: {
            name: "MS Dhoni",
            performance: "48*(21)",
            image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png"
        },
        highlights: [
            "Last over finish by MS Dhoni",
            "Ravindra Jadeja's all-round show",
            "Andre Russell's quick 45"
        ]
    },
    {
        id: 3,
        team1: {
            name: "Gujarat Titans",
            logo: teamLogos["Gujarat Titans"],
            score: "176/6",
            overs: "20.0"
        },
        team2: {
            name: "Rajasthan Royals",
            logo: teamLogos["Rajasthan Royals"],
            score: "177/4",
            overs: "19.2"
        },
        result: "Rajasthan Royals won by 6 wickets",
        venue: "Sawai Mansingh Stadium",
        date: "2025-03-24T15:30:00",
        motm: {
            name: "Jos Buttler",
            performance: "89*(52)",
            image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png"
        },
        highlights: [
            "Jos Buttler's match-winning knock",
            "Rashid Khan's economical spell",
            "Brilliant catching by Sanju Samson"
        ]
    }
];

// Career Guide Content
const careerGuideContent = {
    gettingStarted: {
        title: "Getting Started in Cricket",
        content: `
            <div class="career-step">
                <h4><i class="fas fa-child"></i> Age Groups (8-15 years)</h4>
                <ul>
                    <li>Join a local cricket club or school team</li>
                    <li>Learn basic batting, bowling, and fielding techniques</li>
                    <li>Participate in age-group tournaments</li>
                    <li>Focus on physical fitness and flexibility</li>
                </ul>
                <div class="action-box">
                    <h5>Action Items:</h5>
                    <button class="find-club-btn">Find Local Clubs</button>
                    <button class="training-video-btn">Watch Training Videos</button>
                </div>
            </div>
        `
    },
    training: {
        title: "Training & Development",
        content: `
            <div class="career-step">
                <h4><i class="fas fa-dumbbell"></i> Essential Training Components</h4>
                <div class="training-grid">
                    <div class="training-item">
                        <i class="fas fa-running"></i>
                        <h5>Physical Training</h5>
                        <ul>
                            <li>Strength and conditioning</li>
                            <li>Speed and agility drills</li>
                            <li>Endurance building</li>
                            <li>Flexibility exercises</li>
                        </ul>
                    </div>
                    <div class="training-item">
                        <i class="fas fa-brain"></i>
                        <h5>Technical Skills</h5>
                        <ul>
                            <li>Batting techniques</li>
                            <li>Bowling variations</li>
                            <li>Fielding positions</li>
                            <li>Wicket-keeping skills</li>
                        </ul>
                    </div>
                    <div class="training-item">
                        <i class="fas fa-chess"></i>
                        <h5>Mental Training</h5>
                        <ul>
                            <li>Match strategy</li>
                            <li>Pressure handling</li>
                            <li>Decision making</li>
                            <li>Team dynamics</li>
                        </ul>
                    </div>
                </div>
                <div class="training-schedule">
                    <h5>Recommended Weekly Schedule</h5>
                    <div class="schedule-grid"></div>
                </div>
            </div>
        `
    },
    buildingCareer: {
        title: "Building Your Career",
        content: `
            <div class="career-step">
                <h4><i class="fas fa-chart-line"></i> Career Progression</h4>
                <div class="career-path">
                    <div class="path-milestone">
                        <div class="milestone-dot"></div>
                        <h5>School/Club Level</h5>
                        <p>Build foundational skills and gain match experience</p>
                    </div>
                    <div class="path-milestone">
                        <div class="milestone-dot"></div>
                        <h5>District Level</h5>
                        <p>Compete in regional tournaments and trials</p>
                    </div>
                    <div class="path-milestone">
                        <div class="milestone-dot"></div>
                        <h5>State Level</h5>
                        <p>Join state cricket academy and represent state teams</p>
                    </div>
                    <div class="path-milestone">
                        <div class="milestone-dot"></div>
                        <h5>National Level</h5>
                        <p>National tournaments and team selection camps</p>
                    </div>
                </div>
            </div>
        `
    },
    professionalLevel: {
        title: "Professional Level",
        content: `
            <div class="career-step">
                <h4><i class="fas fa-trophy"></i> Professional Cricket Opportunities</h4>
                <div class="pro-opportunities">
                    <div class="opportunity-card">
                        <h5>Domestic Cricket</h5>
                        <ul>
                            <li>First-class cricket</li>
                            <li>List A cricket</li>
                            <li>T20 leagues</li>
                            <li>State teams</li>
                        </ul>
                    </div>
                    <div class="opportunity-card">
                        <h5>International Cricket</h5>
                        <ul>
                            <li>National team selection</li>
                            <li>Test matches</li>
                            <li>ODI cricket</li>
                            <li>T20 internationals</li>
                        </ul>
                    </div>
                    <div class="opportunity-card">
                        <h5>League Cricket</h5>
                        <ul>
                            <li>IPL</li>
                            <li>Big Bash</li>
                            <li>County Cricket</li>
                            <li>Other T20 leagues</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    resources: {
        title: "Resources & Support",
        content: `
            <div class="career-step">
                <h4><i class="fas fa-book-reader"></i> Essential Resources</h4>
                <div class="resources-grid">
                    <div class="resource-card">
                        <i class="fas fa-graduation-cap"></i>
                        <h5>Education</h5>
                        <ul>
                            <li>Cricket academies</li>
                            <li>Online courses</li>
                            <li>Coaching certifications</li>
                            <li>Video tutorials</li>
                        </ul>
                        <button class="explore-btn">Explore Courses</button>
                    </div>
                    <div class="resource-card">
                        <i class="fas fa-hands-helping"></i>
                        <h5>Support Systems</h5>
                        <ul>
                            <li>Cricket associations</li>
                            <li>Sports scholarships</li>
                            <li>Mental health support</li>
                            <li>Career counseling</li>
                        </ul>
                        <button class="contact-btn">Get Support</button>
                    </div>
                    <div class="resource-card">
                        <i class="fas fa-tools"></i>
                        <h5>Equipment & Facilities</h5>
                        <ul>
                            <li>Cricket gear guide</li>
                            <li>Training facilities</li>
                            <li>Equipment maintenance</li>
                            <li>Technology tools</li>
                        </ul>
                        <button class="equipment-btn">View Guide</button>
                    </div>
                </div>
            </div>
        `
    }
};

// Function to initialize career guide
function initializeCareerGuide() {
    const sections = ['gettingStarted', 'training', 'buildingCareer', 'professionalLevel', 'resources'];
    sections.forEach(section => {
        const content = document.querySelector(`#career-guide .path-section:has(h3:contains("${careerGuideContent[section].title}")) .path-content`);
        if (content) {
            content.innerHTML = careerGuideContent[section].content;
        }
    });

    // Add event listeners for interactive elements
    document.querySelectorAll('.find-club-btn').forEach(btn => {
        btn.addEventListener('click', () => showClubFinder());
    });

    document.querySelectorAll('.training-video-btn').forEach(btn => {
        btn.addEventListener('click', () => showTrainingVideos());
    });

    document.querySelectorAll('.explore-btn').forEach(btn => {
        btn.addEventListener('click', () => showCourses());
    });

    // Initialize 3D player model
    init3DPlayerModel();
}

// Function to initialize 3D player model
function init3DPlayerModel() {
    const modelContainer = document.querySelector('.player-model');
    if (!modelContainer) return;

    // Create a scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, modelContainer.clientWidth / modelContainer.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
    modelContainer.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Load 3D model
    const loader = new THREE.GLTFLoader();
    loader.load('/models/cricket_player.glb', (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        
        // Position the model
        model.position.set(0, -1, 0);
        camera.position.z = 5;

        // Animation
        function animate() {
            requestAnimationFrame(animate);
            model.rotation.y += 0.005;
            renderer.render(scene, camera);
        }
        animate();
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        const width = modelContainer.clientWidth;
        const height = modelContainer.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
}

// Function to create image URL backup object
const createImageBackup = (url) => ({
    primary: url,
    fallback1: url.replace('IPLHeadshot2022', 'IPLHeadshot2023'),
    fallback2: url.replace('IPLHeadshot2022', 'IPLHeadshot2021'),
    default: 'https://scores.iplt20.com/ipl/playerimages/default-player.png'
});

// Enhanced image error handling
function handleImageError(img) {
    img.onerror = null; // Prevent infinite loop
    
    if (img.classList.contains('team-logo')) {
        // Handle team logo errors
        const teamName = img.alt;
        const fallbackLogo = teamLogos[teamName] || 'https://scores.iplt20.com/ipl/teamlogos/default-team-logo.png';
        if (img.src !== fallbackLogo) {
            img.src = fallbackLogo;
        } else {
            img.src = 'https://scores.iplt20.com/ipl/teamlogos/default-team-logo.png';
        }
    } else {
        // Handle player image errors with multiple fallbacks
        const currentSrc = img.src;
        const backupUrls = createImageBackup(currentSrc);

        if (currentSrc === backupUrls.primary) {
            img.src = backupUrls.fallback1;
        } else if (currentSrc === backupUrls.fallback1) {
            img.src = backupUrls.fallback2;
        } else if (currentSrc === backupUrls.fallback2) {
            img.src = backupUrls.default;
        }
    }
    
    img.classList.add('image-error');
}

// Function to preload all images with fallbacks
function preloadImages() {
    const preloadImage = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    };

    // Preload player images with fallbacks
    players.forEach(player => {
        const backupUrls = createImageBackup(player.image);
        Object.values(backupUrls).forEach(url => preloadImage(url));
    });

    // Preload team logos
    Object.values(teamLogos).forEach(logo => preloadImage(logo));
}

// AI Team Analyzer Class
class EnhancedTeamAnalyzer {
    constructor() {
        this.maxBudget = 100;
        this.requiredPlayers = {
            'Wicket-keeper': { min: 1, max: 1 },
            'Batsman': { min: 3, max: 5 },
            'All-rounder': { min: 2, max: 3 },
            'Bowler': { min: 3, max: 5 }
        };
    }

    suggestBestTeam(availablePlayers, conditions) {
        try {
            // Filter players based on conditions
            const eligiblePlayers = this.filterEligiblePlayers(availablePlayers, conditions);
            
            // Sort players by their calculated value
            const rankedPlayers = this.rankPlayers(eligiblePlayers, conditions);
            
            // Select optimal team composition
            return this.selectOptimalTeam(rankedPlayers);
        } catch (error) {
            console.error('Error suggesting team:', error);
            throw new Error('Failed to suggest team');
        }
    }

    filterEligiblePlayers(players, conditions) {
        return players.filter(player => {
            // Check player fitness
            if (player.matchFitness < 80) return false;

            // Check pitch conditions
            if (conditions.pitch === 'spin' && player.role === 'Bowler') {
                return player.stats.includes('spin') || player.recentForm > 85;
            }

            // Check weather conditions
            if (conditions.weather === 'overcast' && player.role === 'Bowler') {
                return player.stats.includes('pace') || player.recentForm > 85;
            }

            return true;
        });
    }

    rankPlayers(players, conditions) {
        return players.map(player => ({
            ...player,
            value: this.calculatePlayerValue(player, conditions)
        })).sort((a, b) => b.value - a.value);
    }

    calculatePlayerValue(player, conditions) {
        let value = player.recentForm * 0.4 + player.matchFitness * 0.3;

        // Adjust value based on conditions
        if (conditions.pitch === 'spin' && player.stats.includes('spin')) {
            value *= 1.2;
        }
        if (conditions.weather === 'overcast' && player.stats.includes('pace')) {
            value *= 1.2;
        }

        // Adjust value based on venue history
        if (player.stats.includes(conditions.venue)) {
            value *= 1.1;
        }

        return value;
    }

    selectOptimalTeam(rankedPlayers) {
        const team = [];
        let totalCost = 0;
        const selectedCounts = {
            'Wicket-keeper': 0,
            'Batsman': 0,
            'All-rounder': 0,
            'Bowler': 0
        };

        for (const player of rankedPlayers) {
            if (team.length >= 11) break;
            if (totalCost + player.price > this.maxBudget) continue;

            const role = player.role;
            if (selectedCounts[role] < this.requiredPlayers[role].max) {
                team.push(player);
                totalCost += player.price;
                selectedCounts[role]++;
            }
        }

        // Validate team composition
        for (const [role, counts] of Object.entries(this.requiredPlayers)) {
            if (selectedCounts[role] < counts.min) {
                throw new Error(`Could not meet minimum requirement for ${role}`);
            }
        }

        return team;
    }
}

// Function to create and analyze Dream11 team
function createAndAnalyzeTeam(matchId) {
    const match = upcomingMatches.find(m => m.id.toString() === matchId.toString());
    if (!match) {
        showError('Match not found');
        return;
    }

    try {
        const analyzer = new EnhancedTeamAnalyzer();
        const conditions = {
            pitch: getPitchCondition(match.venue),
            weather: getWeatherCondition(match.date),
            venue: match.venue
        };

        // Get all available players for the match
        const availablePlayers = players.filter(player => 
            player.team === match.team1 || player.team === match.team2
        );

        // Get AI suggested team
        const suggestedTeam = analyzer.suggestBestTeam(availablePlayers, conditions);

        // Create team analysis
        const analysis = {
            battingStrength: calculateBattingStrength(suggestedTeam),
            bowlingStrength: calculateBowlingStrength(suggestedTeam),
            balanceScore: calculateTeamBalance(suggestedTeam),
            keyPlayers: identifyKeyPlayers(suggestedTeam),
            recommendations: generateRecommendations(suggestedTeam, conditions)
        };

        // Show team creation modal
        showDream11Modal(match, suggestedTeam, analysis);
    } catch (error) {
        console.error('Error creating Dream11 team:', error);
        showError('Failed to create Dream11 team. Please try again.');
    }
}

// Helper functions for team analysis
function calculateBattingStrength(team) {
    const batsmen = team.filter(p => p.role === 'Batsman' || p.role === 'All-rounder');
    return (batsmen.reduce((sum, p) => sum + p.recentForm, 0) / batsmen.length).toFixed(2);
}

function calculateBowlingStrength(team) {
    const bowlers = team.filter(p => p.role === 'Bowler' || p.role === 'All-rounder');
    return (bowlers.reduce((sum, p) => sum + p.recentForm, 0) / bowlers.length).toFixed(2);
}

function calculateTeamBalance(team) {
    const roles = {
        'Batsman': 0,
        'Bowler': 0,
        'All-rounder': 0,
        'Wicket-keeper': 0
    };
    team.forEach(p => roles[p.role]++);
    return roles;
}

function identifyKeyPlayers(team) {
    return team
        .filter(p => p.recentForm >= 90)
        .map(p => ({
            name: p.name,
            role: p.role,
            strength: p.recentForm
        }));
}

function generateRecommendations(team, conditions) {
    const recs = [];
    if (conditions.pitch === 'spin') {
        recs.push('Consider more spin bowling options');
    }
    if (conditions.weather === 'overcast') {
        recs.push('Fast bowlers might be more effective');
    }
    return recs;
}

function getPitchCondition(venue) {
    // Simplified pitch condition logic based on venue
    const pitchTypes = {
        'Wankhede Stadium': 'pace',
        'M. Chinnaswamy Stadium': 'batting',
        'Eden Gardens': 'spin',
        'Arun Jaitley Stadium': 'balanced'
    };
    return pitchTypes[venue] || 'balanced';
}

function getWeatherCondition(dateString) {
    // Simplified weather condition logic
    const date = new Date(dateString);
    const hour = date.getHours();
    if (hour < 15) return 'clear';
    if (hour < 18) return 'sunny';
    return 'night';
}

// Function to display star players
function displayStarPlayers() {
    const container = document.querySelector('.players-grid');
    if (!container) {
        console.error('Players grid container not found');
        return;
    }

    try {
        container.innerHTML = players.map(player => `
            <div class="player-card">
                <div class="player-image">
                    <img src="${player.image}" 
                         alt="${player.name}" 
                         onerror="handleImageError(this)"
                         loading="lazy">
                    <div class="player-overlay">
                        <div class="player-stats">
                            <p><i class="fas fa-chart-line"></i> Form: ${player.recentForm}%</p>
                            <p><i class="fas fa-heartbeat"></i> Fitness: ${player.matchFitness}%</p>
                            <p><i class="fas fa-coins"></i> Value: ${player.price}Cr</p>
                        </div>
                    </div>
                </div>
                <div class="player-info">
                    <h3>${player.name}</h3>
                    <p class="role"><i class="fas ${getRoleIcon(player.role)}"></i> ${player.role}</p>
                    <p class="team"><i class="fas fa-shield-alt"></i> ${player.team}</p>
                    <div class="stats">
                        <p>${player.stats}</p>
                    </div>
                </div>
            </div>
        `).join('');

        // Add hover effects
        const playerCards = document.querySelectorAll('.player-card');
        playerCards.forEach(card => {
            card.addEventListener('mouseenter', () => card.classList.add('hover'));
            card.addEventListener('mouseleave', () => card.classList.remove('hover'));
        });

    } catch (error) {
        console.error('Error displaying star players:', error);
        container.innerHTML = `
            <div class="error-message">
                Failed to load player information
                <button onclick="retryLoadingPlayers()">Retry</button>
            </div>
        `;
    }
}

// Helper function to get role icon
function getRoleIcon(role) {
    const icons = {
        'Batsman': 'fa-baseball-bat-ball',
        'Bowler': 'fa-bowling-ball',
        'All-rounder': 'fa-star',
        'Wicket-keeper': 'fa-gloves'
    };
    return icons[role] || 'fa-user';
}

// Function to retry loading players
function retryLoadingPlayers() {
    displayStarPlayers();
}

// Function to handle image errors
function handleImageError(img) {
    img.onerror = null; // Prevent infinite loop
    
    if (img.classList.contains('team-logo')) {
        // Handle team logo errors
        const teamName = img.alt;
        const fallbackLogo = teamLogos[teamName] || 'https://scores.iplt20.com/ipl/teamlogos/default-team-logo.png';
        if (img.src !== fallbackLogo) {
            img.src = fallbackLogo;
        } else {
            img.src = 'https://scores.iplt20.com/ipl/teamlogos/default-team-logo.png';
        }
    } else {
        // Handle player image errors with multiple fallbacks
        const currentSrc = img.src;
        const backupUrls = createImageBackup(currentSrc);

        if (currentSrc === backupUrls.primary) {
            img.src = backupUrls.fallback1;
        } else if (currentSrc === backupUrls.fallback1) {
            img.src = backupUrls.fallback2;
        } else if (currentSrc === backupUrls.fallback2) {
            img.src = backupUrls.default;
        }
    }
    
    img.classList.add('image-error');
}

// Function to preload images
function preloadImages() {
    // Preload player images
    players.forEach(player => {
        const img = new Image();
        img.src = player.image;
    });

    // Preload team logos
    Object.values(teamLogos).forEach(logo => {
        const img = new Image();
        img.src = logo;
    });
}

// Function to display upcoming matches
function displayUpcomingMatches() {
    const container = document.querySelector('.upcoming-matches');
    if (!container) {
        console.error('Upcoming matches container not found');
        return;
    }

    try {
        // Show loading state
        container.innerHTML = `
            <div class="loading-skeleton">
                <div class="skeleton-card"></div>
                <div class="skeleton-card"></div>
                <div class="skeleton-card"></div>
            </div>
        `;

        // Format and display matches
        setTimeout(() => {
            container.innerHTML = upcomingMatches.map(match => {
                const matchDate = new Date(match.date);
                const formattedDate = matchDate.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                });
                const formattedTime = matchDate.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                });

                return `
                    <div class="match-card" data-match-id="${match.id}">
                        <div class="match-header">
                            <div class="match-date">
                                <i class="fas fa-calendar"></i>
                                ${formattedDate} | ${formattedTime}
                            </div>
                            <div class="match-venue">
                                <i class="fas fa-map-marker-alt"></i>
                                ${match.venue}
                            </div>
                        </div>
                        <div class="teams-container">
                            <div class="team team1">
                                <div class="team-logo-container">
                                    <img src="${match.team1Logo}" 
                                         alt="${match.team1}" 
                                         class="team-logo"
                                         onerror="handleImageError(this)">
                                </div>
                                <h3>${match.team1}</h3>
                            </div>
                            <div class="vs">VS</div>
                            <div class="team team2">
                                <div class="team-logo-container">
                                    <img src="${match.team2Logo}" 
                                         alt="${match.team2}" 
                                         class="team-logo"
                                         onerror="handleImageError(this)">
                                </div>
                                <h3>${match.team2}</h3>
                            </div>
                        </div>
                        <div class="match-details">
                            <div class="pitch-conditions">
                                <i class="fas fa-cricket-ball"></i>
                                ${match.pitchCondition}
                            </div>
                            <div class="weather-info">
                                <i class="fas fa-cloud-sun"></i>
                                ${match.weather}
                            </div>
                        </div>
                        <button class="create-dream11-btn" onclick="createAndAnalyzeTeam(${match.id})">
                            <i class="fas fa-users"></i>
                            Create Dream11 Team
                        </button>
                    </div>
                `;
            }).join('');

            // Add hover effects
            const matchCards = document.querySelectorAll('.match-card');
            matchCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.classList.add('hover');
                });
                card.addEventListener('mouseleave', () => {
                    card.classList.remove('hover');
                });
            });
        }, 1000); // Simulate loading for better UX

    } catch (error) {
        console.error('Error displaying upcoming matches:', error);
        container.innerHTML = `
            <div class="error-message">
                Failed to load upcoming matches
                <button onclick="retryLoadingMatches()">Retry</button>
            </div>
        `;
    }
}

// Function to retry loading matches
function retryLoadingMatches() {
    displayUpcomingMatches();
}

// Function to display team analysis
function displayTeamAnalysis(team) {
    return `
        <div class="team-analysis">
            <h3>Team Analysis</h3>
            <div class="strength-meters">
                <div class="strength-meter">
                    <label>Batting Strength</label>
                    <div class="meter">
                        <div class="meter-fill" style="width: ${calculateBattingStrength(team)}%"></div>
                    </div>
                </div>
                <div class="strength-meter">
                    <label>Bowling Strength</label>
                    <div class="meter">
                        <div class="meter-fill" style="width: ${calculateBowlingStrength(team)}%"></div>
                    </div>
                </div>
            </div>
            <div class="team-composition">
                <h4>Team Composition</h4>
                ${Object.entries(calculateTeamBalance(team)).map(([role, count]) => `
                    <div class="role-count">
                        <span>${role}s:</span>
                        <span>${count}</span>
                    </div>
                `).join('')}
            </div>
            <div class="key-players">
                <h4>Key Players</h4>
                <ul>
                    ${identifyKeyPlayers(team).map(player => `
                        <li>
                            <span class="player-name">${player.name}</span>
                            <span class="player-role">${player.role}</span>
                            <span class="player-strength">${player.strength}%</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Function to display latest match results
function displayLatestResults() {
    const container = document.getElementById('match-results');
    if (!container) {
        console.error('Match results container not found');
        return;
    }

    try {
        container.innerHTML = latestMatchResults.map(match => {
            const matchDate = new Date(match.date);
            const formattedDate = matchDate.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
            });

            return `
                <div class="result-card">
                    <div class="result-header">
                        <div class="match-date">
                            <i class="fas fa-calendar"></i>
                            ${formattedDate}
                        </div>
                        <div class="match-venue">
                            <i class="fas fa-map-marker-alt"></i>
                            ${match.venue}
                        </div>
                    </div>
                    <div class="match-result">
                        <div class="team team1">
                            <div class="team-logo-container">
                                <img src="${match.team1.logo}" alt="${match.team1.name}" class="team-logo" onerror="handleImageError(this)">
                            </div>
                            <div class="team-details">
                                <h3>${match.team1.name}</h3>
                                <div class="score">${match.team1.score}</div>
                                <div class="overs">(${match.team1.overs} overs)</div>
                            </div>
                        </div>
                        <div class="result-info">
                            <div class="result-text">${match.result}</div>
                        </div>
                        <div class="team team2">
                            <div class="team-logo-container">
                                <img src="${match.team2.logo}" alt="${match.team2.name}" class="team-logo" onerror="handleImageError(this)">
                            </div>
                            <div class="team-details">
                                <h3>${match.team2.name}</h3>
                                <div class="score">${match.team2.score}</div>
                                <div class="overs">(${match.team2.overs} overs)</div>
                            </div>
                        </div>
                    </div>
                    <div class="motm-section">
                        <h4><i class="fas fa-trophy"></i> Player of the Match</h4>
                        <div class="motm-details">
                            <img src="${match.motm.image}" alt="${match.motm.name}" class="motm-image" onerror="handleImageError(this)">
                            <div class="motm-info">
                                <div class="motm-name">${match.motm.name}</div>
                                <div class="motm-performance">${match.motm.performance}</div>
                            </div>
                        </div>
                    </div>
                    <div class="highlights">
                        <h4><i class="fas fa-star"></i> Highlights</h4>
                        <ul>
                            ${match.highlights.map(highlight => `
                                <li><i class="fas fa-circle-check"></i> ${highlight}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }).join('');

        // Add hover effects
        const resultCards = document.querySelectorAll('.result-card');
        resultCards.forEach(card => {
            card.addEventListener('mouseenter', () => card.classList.add('hover'));
            card.addEventListener('mouseleave', () => card.classList.remove('hover'));
        });

    } catch (error) {
        console.error('Error displaying match results:', error);
        container.innerHTML = `
            <div class="error-message">
                Failed to load match results
                <button onclick="retryLoadingResults()">Retry</button>
            </div>
        `;
    }
}

// Function to retry loading results
function retryLoadingResults() {
    displayLatestResults();
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    displayUpcomingMatches();
    displayStarPlayers();
    displayLatestResults();
    initializeCareerGuide();
});
