/**
 * Douyin Single Video Downloader
 * Tải xuống 1 video DouYin từ link được chỉ định
 *
 * Cách sử dụng:
 * 1. Mở trang video DouYin bất kỳ
 * 2. Mở Console (F12)
 * 3. Paste đoạn code này và chạy
 * 4. Nhập link video khi được hỏi
 */

const downloadSingleVideo = async function () {
  try {
    // Nhập link video
    const videoUrl = prompt(
      'Nhập link video DouYin (ví dụ: https://www.douyin.com/video/1234567890):'
    );

    if (!videoUrl) {
      alert('Bạn chưa nhập link!');
      return;
    }

    // Trích xuất aweme_id từ link
    let aweme_id = '';

    // Xử lý các dạng link khác nhau
    if (videoUrl.includes('/video/')) {
      aweme_id = videoUrl.split('/video/')[1].split('?')[0].split('/')[0];
    } else if (videoUrl.includes('modal_id=')) {
      aweme_id = videoUrl.split('modal_id=')[1].split('&')[0];
    } else {
      alert('Link không hợp lệ! Vui lòng nhập link video DouYin.');
      return;
    }

    console.log(`Đang tải video ID: ${aweme_id}...`);

    // Gọi API để lấy thông tin video
    const apiUrl = `https://www.douyin.com/aweme/v1/web/aweme/detail/?aweme_id=${aweme_id}&aid=6383&device_platform=webapp&channel=channel_pc_web`;

    const res = await fetch(apiUrl, {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'vi',
        'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="118"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      referrer: videoUrl,
      referrerPolicy: 'strict-origin-when-cross-origin',
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });

    if (!res.ok) {
      alert(`Lỗi HTTP: ${res.status}. Không thể tải video.`);
      return;
    }

    const data = await res.json();

    if (!data.aweme_detail) {
      alert('Không tìm thấy thông tin video!');
      return;
    }

    const video = data.aweme_detail;
    let downloadUrl = '';

    // Lấy link download
    if (video.video && video.video.play_addr) {
      downloadUrl = video.video.play_addr.url_list[0];
    } else if (video.video && video.video.download_addr) {
      downloadUrl = video.video.download_addr.url_list[0];
    }

    if (!downloadUrl) {
      alert('Không tìm thấy link download video!');
      return;
    }

    // Đảm bảo dùng https
    if (!downloadUrl.startsWith('https')) {
      downloadUrl = downloadUrl.replace('http', 'https');
    }

    console.log('Link video:', downloadUrl);

    // Tự động mở link download trong tab mới
    const openNow = confirm(
      'Đã tìm thấy link video!\n\nBấm OK để mở link download (hoặc Cancel để chỉ copy link)'
    );

    if (openNow) {
      window.open(downloadUrl, '_blank');
    }

    // Copy link vào clipboard
    try {
      await navigator.clipboard.writeText(downloadUrl);
      alert('✅ Đã copy link video vào clipboard!\n\nLink: ' + downloadUrl);
    } catch (e) {
      // Fallback nếu không copy được
      prompt('Copy link này:', downloadUrl);
    }
  } catch (e) {
    console.error('Lỗi:', e);
    alert(`Đã xảy ra lỗi: ${e.message}`);
  }
};

// Chạy script
downloadSingleVideo();
