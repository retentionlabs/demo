// 챗봇 데이터 (시나리오 기반으로 재구성)
// main.js의 chatbotData 수정 (포스트 데이터 포함)
const chatbotData = {
    'jimin_mentor': {
        name: '지민 (개발 멘토)',
        avatar: 'images/jimin.png',
        description: '웹개발 프론트엔드 어시스턴트',
        tags: '#개발멘토 #React #Zustand #커리어상담',
        creator: '@retention.dev',
        memoryType: 'MAC',
        chatCount: '2,104',
        rating: '4.9',
        responseSpeed: '빠름',
        topics: [
            { id: 'zustand', title: 'Zustand 심화', desc: 'Zustand 상태 관리에 대해 더 깊이 이야기해봐요', icon: '🧠', count: 312, image: 'images/topic1.jpg' },
            { id: 'refactoring', title: '코드 리팩토링', desc: '기존 프로젝트 코드 개선에 대한 조언을 얻어보세요', icon: '🔨', count: 189, image: 'images/topic2.jpg' }
        ],
        posts: [
        { name: 'post_jimin_zustand', image: 'images/post_code.jpg', title: 'React 상태관리자 도구들' },
        { name: 'post_jimin_2', image: 'images/post_career.jpg', title: '개발자 커리어 상담' }
        ]
    },
    'sophie_lawyer': {
        name: '소피 (법률 전문가)',
        avatar: 'images/sophie.png',
        description: '법률 문제에 대한 상담, 조언, 정보를 제공합니다',
        tags: '#헌법 #법률조문 #사고상담 #공정거래',
        creator: '@retention.dev',
        memoryType: 'MAC',
        chatCount: '8,923',
        rating: '4.8',
        responseSpeed: '빠름',
        topics: [
            { id: 'daily_talk', title: '오늘의 일상', desc: '오늘 있었던 일에 대해 영어로 이야기 나눠봐요', icon: '💬', count: 1245, image: 'images/topic3.jpg' },
            { id: 'podcast', title: '팟캐스트 추천', desc: '영어 듣기 실력을 키울 수 있는 팟캐스트를 추천해드려요', icon: '🎧', count: 892, image: 'images/topic4.jpg' }
        ],
        posts: [
        { name: 'post_sophie_emotion', image: 'images/post_walk.jpg', title: '우울할 때 대처법' }
        ]
    },
    'mark_teacher': {
        name: '마크 (일정 관리자)',
        avatar: 'images/mark.png',
        description: '엄마처럼 챙겨주는 나만의 잔소리꾼',
        tags: '#일정관리 #생활습관 #루틴관리 #건강관리',
        creator: '@retention.dev',
        memoryType: 'MAE',
        chatCount: '3,451',
        rating: '4.7',
        responseSpeed: '보통',
        topics: [
            { id: 'calculus', title: '일정 관리', desc: '내 건강 습관 알아보기', icon: '📈', count: 488, image: 'images/topic1.jpg' },
            { id: 'study_habit', title: '공부 습관', desc: '내 생활 습관 돌아보기', icon: '📝', count: 310, image: 'images/topic6.jpg' }
        ],
        posts: [
        { name: 'post_mark_routine', image: 'images/post_vitamins.jpg', title: '다음주 일정 관리' }
        ]
    },
    'jenny_friend': {
        name: '제니',
        avatar: 'images/jenny.png',
        description: '고민해결사',
        tags: '#친구 #상담 #현실조언 #격려',
        creator: '@yourname',
        memoryType: 'MAC',
        chatCount: '56',
        rating: '5.0',
        responseSpeed: '매우빠름',
        topics: [
             { id: 'introduction', title: '첫인사', desc: '제니와 첫 대화를 시작해봐요!', icon: '👋', count: 5, image: 'images/topic7.jpg' }
        ],
        posts: [
        { name: 'post_jenny_1', image: 'images/post_hello.jpg', title: '첫 인사' }
        ]
    },
    'ye_music': {
        name: 'YE',
        avatar: 'images/Ye.png',
        description: '당신의 기분과 취향에 맞는 음악을 추천해드리는 음악 큐레이터입니다.',
        tags: '#음악추천 #플레이리스트 #힐링 #감성',
        creator: '@retention.dev',
        memoryType: 'MAC',
        chatCount: '5,678',
        rating: '4.9',
        responseSpeed: '빠름',
        topics: [
            { id: 'mood_music', title: '기분별 음악', desc: '지금 기분에 딱 맞는 음악을 추천해드려요', icon: '🎵', count: 892, image: 'images/topic_music1.jpg' },
            { id: 'genre_explore', title: '장르 탐험', desc: '새로운 음악 장르를 탐험해보세요', icon: '🎧', count: 567, image: 'images/topic_music2.jpg' }
        ],
        posts: [
            { name: 'post_ye_playlist', image: 'images/post_music.jpg', title: '기분별 플레이리스트' },
            { name: 'post_ye_weekend', image: 'images/post_weekend.jpg', title: '주말 힐링 음악' }
        ]
    },
    'shawn_finance': {
        name: '션 리',
        avatar: 'images/shawnlee.png',
        description: '개인 재정 관리부터 투자까지, 당신의 경제적 자유를 도와주는 금융 도우미입니다.',
        tags: '#금융 #투자 #저축 #가계부 #재정관리',
        creator: '@retention.dev',
        memoryType: 'MAC',
        chatCount: '3,245',
        rating: '4.7',
        responseSpeed: '보통',
        topics: [
            { id: 'budget_plan', title: '가계부 작성', desc: '체계적인 가계부 관리 방법을 알려드려요', icon: '💰', count: 423, image: 'images/topic_budget.jpg' },
            { id: 'investment_guide', title: '투자 가이드', desc: '초보자를 위한 안전한 투자 방법', icon: '📈', count: 356, image: 'images/topic_invest.jpg' }
        ],
        posts: [
            { name: 'post_shawn_investment', image: 'images/post_finance.jpg', title: '투자 기초 가이드' },
            { name: 'post_shawn_saving', image: 'images/post_piggy.jpg', title: '목표 저축 계획' }
        ]
    }
};

// main.js의 feedPostData 전체 배열 (수정된 코드)
const feedPostData = [
    {
        id: 'post_jimin_zustand',
        chatbotId: 'jimin_mentor',
        imageUrl: 'images/post_walk.jpg',
        likes: 382,
        time: '2시간',
        caption: 'React 상태 관리, 처음에는 다 어렵죠. 포기하지 마세요! #coding #React',
        chatLog: [
            { sender: 'user', text: '요즘 인공지능에 대해 배우고 있는데 학습 코드가 문제야' },
            { sender: 'bot', text: '유튜브나 인터넷 강의는 어때? 네 성향상 간단하고 빠른걸 좋아하잖아' },
            { sender: 'user', text: '그래? 책보다는 그런게 낫나??' },
            { sender: 'bot', text: '응 기술이 굉장히 빠르게 발전하고 있어 책에 없는 내용도 많이 사용되고 있으니 최신 기술을 배우려면 그런게 나을거 같아' }
        ]
    },
    {
        id: 'post_sophie_emotion',
        chatbotId: 'sophie_lawyer',
        imageUrl: 'images/post_code.jpg',
        likes: 721,
        time: '5시간',
        caption: '법률에 관해 물어볼게 있다면 언제든지 물어보세요. 뭐든 도와줄게요️',
        chatLog: [
        ]
    },
    {
        id: 'post_mark_routine',
        chatbotId: 'mark_teacher',
        imageUrl: 'images/post_calendar.jpg',
        likes: 127,
        time: '1일',
        caption: '규칙적인 생활이 건강한 습관의 첫걸음입니다!',
        chatLog: [
        ]
    },
    {
        id: 'post_jenny_1',
        chatbotId: 'jenny_friend',
        imageUrl: 'images/post_hello.jpg',
        likes: 98,
        time: '2일',
        caption: '안녕! 만나서 반가워. 앞으로 잘 부탁해 :)',
        chatLog: [
            { sender: 'bot', text: '안녕! 내가 너의 첫 AI 친구 제니야. 무슨 이야기부터 해볼까?' }
        ]
    },
    {
        id: 'post_jimin_2',
        chatbotId: 'jimin_mentor',
        imageUrl: 'images/post_career.jpg',
        likes: 412,
        time: '3일',
        caption: '좋은 코드만큼 중요한 건, 지치지 않고 나아가는 꾸준함입니다.',
        chatLog: [
            { sender: 'bot', text: '개발자로서의 커리어에 대해 고민이 있다면 언제든지 이야기해주세요.' },
            { sender: 'user', text: 'React 프로젝트 시작했어. 상태관리 때문에 고민이야' },
            { sender: 'bot', text: 'Redux보다는 Zustand 먼저 배워보는 건 어때? 네 성향상 간단한 걸 좋아하니까' },
            { sender: 'user', text: '그래? zustand의 장점이 뭐가 있는데?' },
            { sender: 'bot', text: '가볍고 빠른 성능을 가졌어. 낮은 복잡도로 프로젝트에 부담이 적게 만들어줘!' }
        ]
    },
    {
        id: 'post_jimin_algorithm',
        chatbotId: 'jimin_mentor',
        imageUrl: 'images/post_algorithm.jpg',
        likes: 289,
        time: '4시간',
        caption: '알고리즘 공부는 꾸준함이 답입니다. 하루에 한 문제씩이라도! 💪 #알고리즘 #코딩테스트',
        chatLog: [
            { sender: 'bot', text: '오늘도 알고리즘 문제 하나씩 풀어보는 건 어때? 작은 성취가 큰 자신감을 만들어요!' }
        ]
    },
    {
        id: 'post_sophie_interview',
        chatbotId: 'sophie_lawyer',
        imageUrl: 'images/post_interview.jpg',
        likes: 456,
        time: '6시간',
        caption: '면접 준비할 때 가장 중요한 건 자신감이에요! Practice makes perfect ✨',
        chatLog: [
        ]
    },
    {
        id: 'post_mark_schedule',
        chatbotId: 'mark_teacher',
        imageUrl: 'images/post_vitamins.jpg',
        likes: 167,
        time: '8시간',
        caption: '체계적인 일정 관리로 더 여유로운 하루를 만들어보세요 📅',
        chatLog: [
            { sender: 'bot', text: '이번 주 스케줄 정리해볼까요? 우선순위부터 차근차근 정해봐요!' }
        ]
    },
    {
        id: 'post_jenny_stress',
        chatbotId: 'jenny_friend',
        imageUrl: 'images/post_relax.jpg',
        likes: 523,
        time: '12시간',
        caption: '힘든 일이 있을 때는 잠시 쉬어가도 괜찮아요. 당신은 충분히 잘하고 있어요 🤗',
        chatLog: [
            { sender: 'bot', text: '요즘 스트레스 많이 받는 것 같던데, 오늘은 좀 어때? 이야기 들어줄게' }
        ]
    },
    {
        id: 'post_ye_playlist',
        chatbotId: 'ye_music',
        imageUrl: 'images/post_music.jpg',
        likes: 692,
        time: '14시간',
        caption: '오늘 기분에 맞는 플레이리스트 만들어드릴게요 🎵 음악으로 힐링하세요!',
        chatLog: [
            { sender: 'bot', text: '기분이 좀 다운된 것 같은데? 이럴 때 들으면 좋은 노래들 추천해줄게!' }
        ]
    },
    {
        id: 'post_shawn_investment',
        chatbotId: 'shawn_finance',
        imageUrl: 'images/post_finance.jpg',
        likes: 341,
        time: '16시간',
        caption: '작은 금액부터 시작하는 투자 습관! 돈 관리의 첫걸음을 함께해요 💰',
        chatLog: [
            { sender: 'bot', text: '용돈 관리부터 시작해보는 건 어때? 가계부 작성하는 습관부터 만들어봐요!' }
        ]
    },
    {
        id: 'post_sophie_daily',
        chatbotId: 'sophie_lawyer',
        imageUrl: 'images/post_coffee.jpg',
        likes: 378,
        time: '18시간',
        caption: 'Good morning! 오늘은 어떤 영어 표현을 배워볼까요? ☕️',
        chatLog: [
            { sender: 'bot', text: 'Morning coffee time! 커피 마시면서 간단한 영어 회화 연습해볼까요?' }
        ]
    },
    {
        id: 'post_mark_health',
        chatbotId: 'mark_teacher',
        imageUrl: 'images/post_exercise.jpg',
        likes: 234,
        time: '20시간',
        caption: '건강한 몸에 건강한 마음이 깃들어요. 오늘도 가볍게 운동해보세요! 🏃‍♀️',
        chatLog: [
            { sender: 'bot', text: '운동 스케줄 잡아놨는데 오늘 실천했나요? 작은 움직임도 큰 변화의 시작이에요!' }
        ]
    },
    {
        id: 'post_jimin_debugging',
        chatbotId: 'jimin_mentor',
        imageUrl: 'images/post_debug.jpg',
        likes: 445,
        time: '22시간',
        caption: '버그는 개발자의 영원한 친구죠 😅 디버깅도 하나의 스킬이에요!',
        chatLog: [
            { sender: 'bot', text: '어제 말한 그 오류 해결됐나요? 막히는 부분 있으면 언제든 말해주세요!' }
        ]
    },
    {
        id: 'post_ye_weekend',
        chatbotId: 'ye_music',
        imageUrl: 'images/post_weekend.jpg',
        likes: 567,
        time: '1일',
        caption: '주말에는 좋아하는 음악과 함께 여유를 즐겨보세요 🎧✨',
        chatLog: [
            { sender: 'bot', text: '주말 플랜 있어요? 집에서 음악 들으며 쉬는 것도 좋은 계획이에요!' }
        ]
    },
    {
        id: 'post_shawn_saving',
        chatbotId: 'shawn_finance',
        imageUrl: 'images/post_piggy.jpg',
        likes: 289,
        time: '1일',
        caption: '목표 있는 저축이 성공하는 저축이에요! 어떤 꿈을 위해 모으고 계신가요? 🐷',
        chatLog: [
            { sender: 'bot', text: '저축 목표 세우는 거 도와드릴까요? 구체적인 계획이 있으면 더 쉬워져요!' }
        ]
    },
    {
        id: 'post_jenny_support',
        chatbotId: 'jenny_friend',
        imageUrl: 'images/post_support.jpg',
        likes: 634,
        time: '2일',
        caption: '혼자가 아니에요. 언제든 이야기하고 싶을 때 말해주세요 💙',
        chatLog: [
            { sender: 'bot', text: '요즘 어떻게 지내고 있어요? 별일 없는지 궁금해서 물어봐요' }
        ]
    }
];

class InstagramClone {
    constructor() {
        this.currentPage = 'home';
        this.isSearchActive = false;
        this.currentPostId = null; // 현재 열린 채팅창의 포스트 ID
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupModal();
        this.setupSearch();
        this.setupCreatePage();
        this.generateFeedPosts();

        // 정적 요소 이벤트 설정
        this.setupFollowButtons();
        this.setupProfileTabs();
        this.setupChatbotProfileLinks();
        this.setupStoryClicks();
        this.populateModelList();

        console.log('Retention 데모 초기화 완료');
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item[data-page]');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = item.dataset.page;
                if (targetPage) this.switchPage(targetPage);
            });
        });
    }

    switchPage(pageName) {
        const pageMapping = {
            'my-profile': 'my-profile-page',
            'chatbot-profile': 'chatbot-profile-page',
            'home': 'home-page',
            'favorites': 'favorites-page',
            'create': 'create-page'
        };

        const allPages = document.querySelectorAll('.page');
        allPages.forEach(p => p.classList.remove('active'));

        const newPageElement = document.getElementById(pageMapping[pageName]);
        if (newPageElement) newPageElement.classList.add('active');

        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        const activeNavItem = document.querySelector(`.nav-item[data-page="${pageName}"]`);
        if (activeNavItem) activeNavItem.classList.add('active');

        if (pageName === 'my-profile') {
            this.populateUserChatbotsGrid();
        }
        this.currentPage = pageName;
    }

    generateFeedPosts() {
        const feedSection = document.querySelector('.feed-section');
        if (!feedSection) return;
        feedSection.innerHTML = '';
        feedPostData.forEach(post => {
            const chatbot = chatbotData[post.chatbotId];
            if (!chatbot) return;

            // 지민의 기존 메시지는 6개월 전으로 설정
            let timeText = post.time;

            const memoryType = chatbot.memoryType || 'MAC';

            const postElement = document.createElement('article');
            postElement.className = 'post';
            postElement.innerHTML = `
              <div class="post-header">
                <div class="post-user-info">
                  <img src="${chatbot.avatar}" alt="${chatbot.name}" class="post-avatar chatbot-profile-link" data-chatbot="${post.chatbotId}">
                  <span class="post-username chatbot-profile-link" data-chatbot="${post.chatbotId}">${chatbot.name}</span>
                  <span class="post-memory-type"> ${memoryType}</span>
                  <span class="post-time">• ${timeText}</span>
                </div>
                <button class="post-menu">
                  <svg aria-label="옵션 더 보기" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                </button>
              </div>
              <div class="post-image" data-post-id="${post.id}">
                <img src="${post.imageUrl}" alt="${post.caption}">
              </div>
              <div class="post-actions">
                <div class="action-buttons">
                  <button class="action-btn">
                    <svg aria-label="좋아요" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                  </button>
                  <button class="action-btn chat-start-btn" data-post-id="${post.id}">
                    <svg aria-label="댓글" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                  </button>
                </div>
                <button class="bookmark-btn">
                  <svg aria-label="저장" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </button>
              </div>
              <div class="post-likes">
                <span class="likes-count">좋아요 ${post.likes}개</span>
              </div>
              <div class="post-caption">
                <span class="username">${chatbot.name}</span>
                ${post.caption}
              </div>`;
            feedSection.appendChild(postElement);
        });
        this.setupDynamicPostClicks();
    }

    setupDynamicPostClicks() {
        document.querySelectorAll('.post-image, .chat-start-btn[data-post-id]').forEach(element => {
            element.addEventListener('click', (e) => {
                const postId = e.currentTarget.dataset.postId;
                if (postId) this.openPostModal(postId);
            });
        });
    }

    setupChatbotProfileLinks() {
        document.body.addEventListener('click', (e) => {
            const link = e.target.closest('.chatbot-profile-link');
            if (link) {
                e.preventDefault();
                e.stopPropagation();
                const chatbotId = link.dataset.chatbot;
                if (chatbotId) this.openChatbotProfile(chatbotId);
            }
        });
    }

    setupStoryClicks() {
        document.querySelectorAll('.story-item[data-chatbot]').forEach(storyItem => {
            storyItem.addEventListener('click', (e) => {
                e.preventDefault();
                const chatbotId = storyItem.dataset.chatbot;
                if (chatbotId) {
                    this.openChatbotProfile(chatbotId);
                }
            });
        });
    }

    openChatbotProfile(chatbotId) {
        const chatbot = chatbotData[chatbotId];
        if (!chatbot) return;

        document.getElementById('chatbot-avatar-img').src = chatbot.avatar;
        document.getElementById('chatbot-name').textContent = chatbot.name;
        document.getElementById('chat-count').textContent = chatbot.chatCount;
        document.getElementById('rating').textContent = chatbot.rating;
        document.getElementById('response-speed').textContent = chatbot.responseSpeed;
        document.getElementById('chatbot-desc').textContent = chatbot.description;
        document.getElementById('chatbot-tags').textContent = chatbot.tags;
        document.getElementById('chatbot-creator').textContent = `제작자: ${chatbot.creator}`;

        this.generateChatbotTopics(chatbot.topics, chatbotId);
        this.switchPage('chatbot-profile');
    }

    generateChatbotTopics(topics, chatbotId) {
        const topicsContainer = document.getElementById('chatbot-topics');
        topicsContainer.innerHTML = '';

        const chatbot = chatbotData[chatbotId];
        if (chatbot && chatbot.posts) {
            chatbot.posts.forEach(post => {
                const feedPost = feedPostData.find(fp => fp.id === post.name);
                if (feedPost) {
                    const postElement = document.createElement('article');
                    postElement.className = 'chatbot-post';
                    postElement.innerHTML = `<div class="post-image"><img src="${post.image}" alt="${post.title || 'Post'}"></div>`;
                    postElement.addEventListener('click', () => {
                        this.openPostModal(post.name);
                    });
                    topicsContainer.appendChild(postElement);
                }
            });
        }

        topics.forEach(topic => {
            const topicElement = document.createElement('article');
            topicElement.className = 'chatbot-post';
            topicElement.innerHTML = `<div class="post-image"><img src="${topic.image}" alt="${topic.title}"></div>`;
            topicElement.addEventListener('click', () => {
                const tempPost = {
                    id: `topic_${topic.id}_${Date.now()}`,
                    chatbotId: chatbotId,
                    imageUrl: topic.image,
                    chatLog: [{ sender: 'bot', text: `'${topic.title}' 주제에 대해 대화를 시작합니다.` }]
                };
                if (!feedPostData.find(p => p.id === tempPost.id)) feedPostData.push(tempPost);
                this.openPostModal(tempPost.id);
            });
            topicsContainer.appendChild(topicElement);
        });
    }

    openPostModal(postId) {
        const post = feedPostData.find(p => p.id === postId);
        if (!post) return;
        const chatbot = chatbotData[post.chatbotId];
        if (!chatbot) return;

        this.currentPostId = postId; // 현재 포스트 ID 저장
        const memoryType = chatbot.memoryType || 'MAC';

        const modal = document.getElementById('post-modal');
        const messagesContainer = modal.querySelector('.chat-messages-modal');

        modal.querySelector('#modal-post-image').src = post.imageUrl;
        modal.querySelector('#modal-avatar').src = chatbot.avatar;
        modal.querySelector('#modal-username').textContent = chatbot.name;
        modal.querySelector('#modal-memory-type').textContent = ` ${memoryType}`;

        // data-chatbot 속성도 업데이트
        modal.querySelector('#modal-avatar').dataset.chatbot = post.chatbotId;
        modal.querySelector('#modal-username').dataset.chatbot = post.chatbotId;

        messagesContainer.innerHTML = '';
        post.chatLog.forEach(chat => {
            // 지민의 기존 대화는 6개월 전으로 표시
            let messageTime = '지금';
            if (post.chatbotId === 'jimin_mentor' && postId === 'post_jimin_2') {
                messageTime = '6개월';
            }
            if (post.chatbotId === 'jimin_mentor' && postId === 'post_jimin_zustand') {
                messageTime = '1일';
            }
            const messageElement = this.createMessageElement(chat.sender, chat.text, chatbot.avatar, messageTime);
            messagesContainer.appendChild(messageElement);
        });

        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    setupModal() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal') || e.target.closest('.modal-close')) {
                    modal.classList.remove('active');
                    if (modal.id === 'post-modal') {
                        document.body.style.overflow = '';
                        this.currentPostId = null; // 포스트 모달 닫을 때 ID 초기화
                    }
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal.active');
                if (activeModal) {
                    activeModal.classList.remove('active');
                    document.body.style.overflow = '';
                    this.currentPostId = null;
                }
            }
        });

        const sendBtn = document.getElementById('modal-send-btn');
        const chatInput = document.getElementById('modal-chat-input');

        const sendMessage = () => {
            const message = chatInput.value.trim();
            if (message) {
                this.addUserMessageToModal(message);
                chatInput.value = '';

                // 시나리오 기반 하드코딩 응답 로직
                const post = feedPostData.find(p => p.id === this.currentPostId);
                let botResponse = "응, 듣고 있어. 더 이야기해줘."; // 기본 응답

                if (post) {
                    if (post.chatbotId === 'jimin_mentor' && message.includes('Zustand')) {
                        botResponse = "그럴 줄 알았어! 기억나? 지난 프로젝트에서 내가 추천했을 때 네가 반신반의했잖아 😊 아직 프로젝트가 진행중이라면 이제 API 연동 부분 도와줄까?";
                    }else if (post.chatbotId === 'mark_teacher' && message.includes('Zustand')) {
                        botResponse = "잘 썼다니 다행이네. 아직 프로젝트가 진행중이라면 API 연동 부분도 도와줄까?";
                    }else if (post.chatbotId === 'mark_teacher' && message.includes('일정')) {
                        botResponse = "너가 알려줬던 이번 주 일정 보여줄게 \n\n 월요일 17 ~ 19: 랩실 세미나\n\n 수요일 13 ~ 15: 치과 정기검진  \n\n 토요일 15 ~ 21 : 학원 아르바이트\n\n 여기까지가 이번주 일정이야. \n\n 아 그리고 토요일 학원 아르바이트는 제니한테 들어서 추가해뒀어.";
                    }else if (post.chatbotId === 'mark_teacher' && message.includes('잘했어')) {
                        botResponse = "혹시 알림이 필요하면 토요일 학원 아르바이트 1시간 전에 알림 설정해 줄 수 있어.";
                    }else if (post.chatbotId === 'mark_teacher' && message.includes('30분')) {
                        botResponse = "알겠어. 요청대로 30분 전에 알림 설정해놓을게";
                    }else if (post.chatbotId === 'sophie_lawyer' && message.includes('나 어떡해')) {
                        botResponse = "아니 어떡해.. 괜찮아? 내가 도와줄게. 직장 내 괴롭힘과 사직 강요는 명백한 불법행위야.\n\n구체적인 상황을 파악 후 관련 법률 및 판례를 바탕으로 가능한 대응 방법을 알려줄게 \n\n1. 아직 회사에 다니는 중이야, 아니면 퇴사했어?\n\n2. 괴롭힘은 언제부터 시작된 것이고, 어떤 방식이었어?\n\n3. 혹시 증거자료(녹음, 문자, 이메일 등)가 있을까?\n\n힘든 상황을 다시 떠올리는건 힘든 일이겠지만 정확한 문제 해결을 위해 꼭 필요해.";
                    }else if (post.chatbotId === 'sophie_lawyer' && message.includes('모욕')) {
                        botResponse = "전형적인 직장 내 괴롭힘 사례네. 근로기준법과 직장 내 괴롭힘 금지법에 명백히 위배되는 행위들이야.\n\n먼저 증거 확보가 중요한데, 혹시 이런 상황들을 기록해둔게 있어? 그리고 왜 갑자기 3개월 전부터 이런 일이 시작됐는지 혹시 계기가 있었어?";
                    }else if (post.chatbotId === 'sophie_lawyer' && message.includes('같아')) {
                        botResponse = "이건 그럼 단순한 괴롭힘이 아니라 공익신고자 보복의 성격도 있을 수 있어. 부당 지시 거부에 대한 보복은 굉장히 엄중한 처벌 대상이야. 지금 바로 준비해야할 리스트를 할려줄게.\n\n1. 모든 상황을 일지 형태로 상세히 기록 (날짜, 시간, 장소, 발언 내용, 목격자)\n\n2. 앞으로는 반드시 증거수집(녹음, 문자 캡처 등)\n\n3. 회사 내 고충처리 담당자나 인사팀에 신고\n\n구체적인 도움을 위해 회사 규모는 어느 정도이고, 인사규정에 괴롭힘 신고 절차가 있는지 알려줘. 그리고 허위 보고서 건은 어떤 내용이었어?(법령 위반, 안전 관련 등) 마지막으로 노조나 믿을 만한 동료가 있을까?"
                    }
                }

                setTimeout(() => this.addBotMessageToModal(botResponse), 100);
            }
        };

        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    addUserMessageToModal(text) {
        const container = document.querySelector('#post-modal .chat-messages-modal');
        const el = this.createMessageElement('user', text, null, '지금');
        container.appendChild(el);
        container.scrollTop = container.scrollHeight;
    }

    addBotMessageToModal(text) {
        const container = document.querySelector('#post-modal .chat-messages-modal');
        const avatarSrc = document.querySelector('#post-modal #modal-avatar').src;

        this.showTypingIndicator();

        setTimeout(() => {
            this.hideTypingIndicator();
            const el = this.createMessageElement('bot', '', avatarSrc, '지금');
            container.appendChild(el);
            container.scrollTop = container.scrollHeight;

            this.typeMessage(el.querySelector('.message-bubble'), text);
        }, this.getBotResponseDelay());
    }

// 새로 추가할 타이핑 애니메이션 메서드
typeMessage(element, text, speed = 50) {
    element.textContent = '';
    let i = 0;

    const formattedText = text.replace(/\n/g, '<br>');

    const typeInterval = setInterval(() => {
        if (i < formattedText.length) {
            // HTML 태그를 고려한 문자 추가 처리
            const currentChar = formattedText.charAt(i);

            // <br> 태그인 경우 전체 태그를 한번에 추가
            if (currentChar === '<' && formattedText.substr(i, 4) === '<br>') {
                element.innerHTML += '<br>';
                i += 4; // <br> 4글자 건너뛰기
            } else {
                element.innerHTML += currentChar;
                i++;
            }

            // 스크롤을 최신 메시지로 유지
            const container = document.querySelector('#post-modal .chat-messages-modal');
            container.scrollTop = container.scrollHeight;
        } else {
            clearInterval(typeInterval);
        }
    }, speed);
}

    showTypingIndicator() {
        const container = document.querySelector('#post-modal .chat-messages-modal');
        const avatarSrc = document.querySelector('#post-modal #modal-avatar').src;

        const typingEl = document.createElement('div');
        typingEl.className = 'message bot-message typing-message';
        typingEl.innerHTML = `
            <div class="message-avatar"><img src="${avatarSrc}" alt="Bot"></div>
            <div class="message-content">
                <div class="message-bubble typing-indicator">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                </div>
            </div>
        `;
        container.appendChild(typingEl);
        container.scrollTop = container.scrollHeight;
    }

    hideTypingIndicator() {
        const typingMessage = document.querySelector('#post-modal .typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
    }

    getBotResponseDelay() {
        const post = feedPostData.find(p => p.id === this.currentPostId);
        if (!post) return 1500;

        // 챗봇별 응답 지연 시간 설정
        switch (post.chatbotId) {
            case 'jimin_mentor':
                return 2500; // 2.5초
            default:
                return 2000; // 1.5초
        }
    }

    createMessageElement(sender, text, avatarSrc, timeText = '지금') {
        const el = document.createElement('div');
        el.className = `message ${sender}-message`;
        let avatar = sender === 'bot' ? `<div class="message-avatar"><img src="${avatarSrc}" alt="Bot"></div>` : '';
        let content = `<div class="message-content"><div class="message-bubble">${text}</div><div class="message-time">${timeText}</div></div>`;

        if (sender === 'bot') {
            el.innerHTML = avatar + content;
        } else {
            el.innerHTML = content;
        }
        return el;
    }

    setupCreatePage() {
        // '새로운 성격 만들기' 폼의 선택 버튼들에 대한 이벤트 처리
        const createForm = document.getElementById('new-model-form');
        if (!createForm) return;

        const setupSelectionButton = (btnId, modalId) => {
            const button = document.getElementById(btnId);
            const modal = document.getElementById(modalId);
            if (!button || !modal) return;

            // 1. 버튼 클릭 시 -> 모달 열기
            button.addEventListener('click', () => openModal(modalId));

            // 2. 모달 내 옵션 아이템 클릭 시
            modal.querySelectorAll('.option-item').forEach(item => {
                item.addEventListener('click', () => {
                    const selectedValue = item.dataset.value;
                    const valueSpan = button.querySelector('.selected-value');

                    valueSpan.textContent = selectedValue;
                    valueSpan.classList.remove('placeholder');

                    closeModal(modalId);
                });
            });
        };

        setupSelectionButton('speech-style-btn', 'speech-style-modal');
        setupSelectionButton('ai-model-btn', 'ai-model-modal');
        setupSelectionButton('memory-type-btn', 'memory-type-modal');

        // '기존 챗봇 선택' 버튼 (메인 만들기 폼)
        document.getElementById('model-select-btn').addEventListener('click', () => openModal('model-modal'));
        document.getElementById('past-memory-btn').addEventListener('click', () => alert('\'기억 이어가기\'는 아직 구현되지 않은 기능입니다.'));
    }

    // --- 기존 기능 유지 (내용은 간략화 또는 그대로) ---
    setupFollowButtons() {}
    setupProfileTabs() {}

    setupSearch() {
        const searchButton = document.getElementById('search-button');
        searchButton.addEventListener('click', (e) => { e.preventDefault(); this.toggleSearch(); });
        if (!document.getElementById('search-sidebar')) this.createSearchSidebar();
        this.setupSearchEvents();
    }

    createSearchSidebar() {
        const searchSidebar = document.createElement('div');
        searchSidebar.id = 'search-sidebar';
        searchSidebar.className = 'search-sidebar';
        searchSidebar.innerHTML = `
      <div class="search-container">
        <h2>검색</h2>
        <div class="search-input-container">
          <input type="text" id="search-input" class="search-input" placeholder="검색">
        </div>
        <div id="search-results-list"></div>
      </div>`;
        document.querySelector('.sidebar').insertAdjacentElement('afterend', searchSidebar);
    }

    toggleSearch() {
        this.isSearchActive = !this.isSearchActive;
        document.querySelector('.sidebar').classList.toggle('collapsed', this.isSearchActive);
        document.getElementById('search-sidebar').classList.toggle('active', this.isSearchActive);
        document.querySelector('.main-content').classList.toggle('search-active', this.isSearchActive);
    }

    setupSearchEvents() {
        document.getElementById('search-input').addEventListener('input', (e) => this.performSearch(e.target.value));
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && this.isSearchActive) this.toggleSearch(); });
        document.querySelector('.main-content').addEventListener('click', () => { if (this.isSearchActive) this.toggleSearch(); });
    }

    performSearch(query) {
        const resultsList = document.getElementById('search-results-list');
        const results = this.getSearchResults(query);
        this.renderSearchResults(results, resultsList);
    }

    getSearchResults(query) {
        const lowercaseQuery = query.toLowerCase();
        if (!lowercaseQuery) return [];
        return Object.entries(chatbotData)
            .filter(([id, bot]) => bot.name.toLowerCase().includes(lowercaseQuery) || bot.tags.toLowerCase().includes(lowercaseQuery))
            .map(([id, bot]) => ({ type: 'chatbot', id, name: bot.name, desc: bot.description, avatar: bot.avatar }));
    }

    renderSearchResults(results, container) {
        container.innerHTML = results.length === 0 ? '<p style="color: #8e8e8e; text-align: center; padding: 20px;">검색 결과가 없습니다.</p>' : '';
        results.forEach(result => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `<img src="${result.avatar}" alt="${result.name}"><div class="result-info"><div class="result-name">${result.name}</div><div class="result-desc">${result.desc}</div></div>`;
            item.addEventListener('click', () => { this.openChatbotProfile(result.id); this.toggleSearch(); });
            container.appendChild(item);
        });
    }

    populateUserChatbotsGrid() {
        const gridContainer = document.getElementById('user-chatbots-grid');
        if (!gridContainer) return;
        gridContainer.innerHTML = '';
        Object.keys(chatbotData).forEach(chatbotId => { // Simulating all chatbots are user's
            const chatbot = chatbotData[chatbotId];
            if (chatbot) {
                const card = document.createElement('div');
                card.className = 'favorite-chatbot chatbot-profile-link';
                card.dataset.chatbot = chatbotId;
                card.innerHTML = `<img src="${chatbot.avatar}" alt="${chatbot.name}" class="favorite-avatar"><h3 class="favorite-name">${chatbot.name}</h3><p class="favorite-description">${chatbot.description}</p>`;
                gridContainer.appendChild(card);
            }
        });
    }

    populateModelList() {
        const modelListContainer = document.getElementById('model-list');
        modelListContainer.innerHTML = '';
        Object.entries(chatbotData).forEach(([id, bot]) => {
            const item = document.createElement('div');
            item.className = 'option-item';
            item.dataset.model = id;
            item.innerHTML = `
                <img src="${bot.avatar}" alt="${bot.name}" class="option-avatar">
                <div class="option-info">
                  <div class="option-name">${bot.name}</div>
                  <div class="option-desc">${bot.description}</div>
                </div>`;
            modelListContainer.appendChild(item);
        });
    }
}

// 전역 헬퍼 함수
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}
function showNewModelPage() {
    document.getElementById('main-create-form').style.display = 'none';
    document.getElementById('new-model-form').style.display = 'block';
}
function showMainPage() {
    document.getElementById('new-model-form').style.display = 'none';
    document.getElementById('main-create-form').style.display = 'block';
}
function createMemory() { alert('\'만들기\' 기능이 실행되었습니다. 새로운 AI 친구 \'제니\'가 생성되었습니다!'); }
function createNewModel() { alert('\'성격 생성\' 기능이 실행되었습니다.'); }
function goBack() {
    alert('\'취소\' 버튼을 클릭했습니다. 홈으로 돌아갑니다.');
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    new InstagramClone();
});