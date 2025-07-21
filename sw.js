// 서비스 워커 기본 설정
self.addEventListener('install', function(event) {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activating...');
  event.waitUntil(self.clients.claim());
});

// 공유된 내용 처리
self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  
  // 공유 데이터가 있는 경우
  if (url.searchParams.has('title') || url.searchParams.has('text') || url.searchParams.has('url')) {
    console.log('Shared content received:', {
      title: url.searchParams.get('title'),
      text: url.searchParams.get('text'),
      url: url.searchParams.get('url')
    });
  }
});
