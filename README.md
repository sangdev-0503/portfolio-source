# Portfolio — Trần Văn Sang

Đây là website portfolio tĩnh được xây dựng bằng HTML, CSS và JavaScript thuần, phù hợp để giới thiệu bản thân, kỹ năng, dự án và thông tin liên hệ.

- Live demo: https://sangdev-0503.github.io/portfolio-source/
- GitHub profile: https://github.com/sangdev-0503

## Tính năng chính

- Giao diện responsive cho desktop và mobile
- Hiệu ứng cuộn và hiện nội dung mượt mà
- Hiệu ứng gõ chữ trong section terminal-style
- Cấu trúc đơn giản, dễ sửa và dễ deploy

## Cấu trúc thư mục

```text
project/
├── index.html          # Trang chính
├── css/
│   └── style.css       # Tất cả style giao diện
├── js/
│   └── script.js       # Hiệu ứng scroll-reveal + typing
├── assets/
│   └── portrait.jpg    # Ảnh đại diện
├── package.json        # Script chạy local
├── netlify.toml        # Cấu hình deploy cho Netlify
├── vercel.json         # Cấu hình deploy cho Vercel
├── nginx.conf.example  # Mẫu cấu hình Nginx cho VPS
└── .vscode/
    └── extensions.json # Gợi ý extension Live Server
```

## 1. Chạy project ở local

### Cách 1 — Dùng Live Server trên VS Code (khuyên dùng)

1. Mở thư mục project bằng VS Code.
2. Cài extension Live Server.
3. Nhấp chuột phải vào file index.html và chọn Open with Live Server.
4. Trình duyệt sẽ mở tại http://127.0.0.1:5500.

### Cách 2 — Dùng Node.js

Nếu máy đã cài Node.js, chạy:

```bash
npm run dev
```

Sau đó mở http://localhost:3000 trong trình duyệt.

### Cách 3 — Dùng Python

```bash
python -m http.server 3000
```

Sau đó mở http://localhost:3000.

## 2. Chỉnh sửa nội dung

- Văn bản, thông tin cá nhân, liên kết dự án: sửa trong index.html
- Màu sắc, font, khoảng cách: sửa trong css/style.css
- Hiệu ứng: sửa trong js/script.js
- Ảnh đại diện: thay file assets/portrait.jpg bằng ảnh mới cùng tên hoặc đổi đường dẫn trong index.html

## 3. Đẩy project lên GitHub

Nếu bạn muốn lưu trữ và triển khai từ GitHub, chạy các lệnh sau trong thư mục project:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/sangdev-0503/portfolio-source.git
git push -u origin main
```

Nếu repo đã tồn tại trên GitHub, thay vì `git remote add origin` bạn có thể dùng:

```bash
git remote set-url origin https://github.com/sangdev-0503/portfolio-source.git
```

## 4. Deploy lên web

### 4.1 GitHub Pages (miễn phí)

1. Đẩy code lên GitHub như hướng dẫn ở trên.
2. Vào repository trên GitHub.
3. Chọn Settings → Pages.
4. Trong phần Build and deployment, chọn:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
5. Lưu lại và chờ vài phút.
6. Link web sẽ có dạng:
   https://sangdev-0503.github.io/portfolio-source/

### 4.2 Netlify (miễn phí)

1. Đăng nhập tại https://netlify.com
2. Chọn New site from Git
3. Kết nối repository GitHub của bạn
4. Đặt publish directory là thư mục gốc của project
5. Deploy xong sẽ nhận được một URL riêng

### 4.3 Vercel (miễn phí)

```bash
npm install -g vercel
cd project
vercel
```

Theo dõi các bước trên terminal để nhận link deploy.

### 4.4 Deploy lên VPS / server riêng

1. Upload thư mục project lên server, ví dụ vào /var/www/portfolio
2. Cài Nginx
3. Dùng file nginx.conf.example làm mẫu cấu hình
4. Trỏ domain về IP server
5. Bật HTTPS bằng Let's Encrypt nếu cần

## 5. Lưu ý quan trọng

- Project này là website tĩnh nên không cần build step phức tạp.
- Không cần cài thêm dependency để chạy local.
- Nếu bạn muốn đổi tên repo hoặc domain, hãy cập nhật lại URL trong README và cấu hình deploy tương ứng.

## 6. Liên hệ

- GitHub: https://github.com/sangdev-0503
- Live demo: https://sangdev-0503.github.io/portfolio-source/
