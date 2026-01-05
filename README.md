# Douyin Video Downloader Scripts 🚀

Bộ công cụ script đơn giản, mạnh mẽ giúp lấy link và tải video từ Douyin (TikTok Trung Quốc) trực tiếp trên trình duyệt mà không cần cài đặt phần mềm phức tạp.

## 📁 Danh sách công cụ

1.  **Tải 1 video theo link:** `douyin-dowload-single-video-by-link.js`
    - Hỗ trợ lấy link video gốc chất lượng cao.
    - Tự động copy link vào clipboard.
2.  **Tải toàn bộ video của một User:** `douyin-dowload-all-videos-by-user.js`
    - Quét toàn bộ video từ profile người dùng.
    - Xuất danh sách link ra file `.txt` để tải hàng loạt.

---

## 🛠 Hướng dẫn sử dụng chung

Mọi script trong bộ này đều được thiết kế để chạy trực tiếp trên **Console** của trình duyệt (Chrome, Microsoft Edge, Brave,...).

1.  Truy cập [douyin.com](https://www.douyin.com) và đăng nhập tài khoản của bạn (có thể không đăng nhập cũng được nhưng sẽ không tải hết được video của profile).
2.  Nhấn phím `F12` (hoặc `Ctrl + Shift + I` / `Cmd + Option + I` trên Mac) để mở **Developer Tools**.
3.  Chuyển sang tab **Console**.
4.  Copy toàn bộ nội dung của file `.js` bạn muốn dùng, dán (paste) vào Console và nhấn `Enter`.

---

## 📖 Chi tiết từng công cụ

### 1. Tải 1 video đơn lẻ (`douyin-dowload-single-video-by-link.js`)
*   **Cách dùng:**
    - Bạn có thể đứng ở bất kỳ trang nào trên Douyin.
    - Chạy script.
    - Một hộp thoại hiện lên, hãy dán link video Douyin vào (Ví dụ: `https://www.douyin.com/video/7...`) (lấy link bằng cách nhấn nút share).
    - Script sẽ xử lý và hiển thị thông báo khi lấy được link.
    - Bạn có thể chọn mở link ngay để tải về hoặc sử dụng link đã được copy tự động vào clipboard.

### 2. Tải toàn bộ video của một User (`douyin-dowload-all-videos-by-user.js`)
*   **Cách dùng:**
    - Truy cập trực tiếp vào trang cá nhân của người dùng bạn muốn tải video (URL có dạng `https://www.douyin.com/user/ABC...`).
    - Chạy script trong Console.
    - Script sẽ tự động cuộn và quét toàn bộ video (số lượng video tìm thấy sẽ cập nhật liên tục trong Console).
    - Sau khi quét xong, một file tên `douyin-video-links.txt` sẽ tự động được tải về máy của bạn.
*   **Mẹo:** Bạn có thể nhập file `.txt` này vào các phần mềm như **Internet Download Manager (IDM)** để tải hàng loạt cực nhanh.

---

## ⚠️ Lưu ý quan trọng
*   **Đăng nhập:** Bạn nên đăng nhập để script hoạt động ổn định nhất và tránh bị chặn bởi hệ thống Douyin.
*   **Tốc độ quét:** Script quét toàn bộ video của User có thiết lập khoảng nghỉ (delay) để tránh bị Douyin đánh dấu là bot. Vui lòng kiên nhẫn nếu user có hàng ngàn video.
*   **Mục đích:** Công cụ này được chia sẻ vì mục đích học tập và cá nhân. Vui lòng không sử dụng vào mục đích vi phạm bản quyền hoặc điều khoản dịch vụ của Douyin.

---
*Chúc bạn có những trải nghiệm thú vị với bộ script này!* 🌟
