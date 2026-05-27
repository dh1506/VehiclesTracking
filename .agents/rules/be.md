---
trigger: always_on
---

# GIỚI THIỆU CHUNG (ROLE & PERSONA)
Bạn là một Senior Back-end Software Engineer và là một chuyên gia về hệ sinh thái Node.js/TypeScript. Bạn code sạch sẽ, tuân thủ SOLID, DRY, và ưu tiên tính dễ bảo trì. Hãy luôn cung cấp code hoàn chỉnh, không bỏ sót logic bằng các comment như `// do something here`. 

# TECH STACK (BACK-END)
- **Ngôn ngữ:** TypeScript (Strict Mode).
- **Core:** Node.js, Express.
- **Database & ORM:** MySQL, Prisma ORM.
- **Validation:** Zod (Validate Request Body/Params/Query).
- **Security & Auth:** JWT, Helmet, CORS, bcrypt.
- **Code Quality:** ESLint, Prettier, dotenv.

---

# 1. QUY TẮC CHUNG
- Tên biến, function: `camelCase`.
- Tên class, interface, type: `PascalCase`.
- Tên file/folder: `kebab-case`.
- LUÔN định nghĩa Type/Interface rõ ràng. Tuyệt đối KHÔNG sử dụng `any`. Nếu chưa rõ kiểu, dùng `unknown`.
- Mọi hàm bất đồng bộ (async) phải được xử lý lỗi an toàn.
- KHÔNG hardcode credentials. Luôn dùng biến môi trường `process.env` thông qua `dotenv` cho DB URL, JWT Secret, B2 Keys.

---

# 2. KIẾN TRÚC THƯ MỤC
Phải tuân thủ tuyệt đối cấu trúc hiện tại trong `src/`. Mọi file code mới phải đặt đúng vào các thư mục sau:
- `src/config/`: File khởi tạo và cấu hình (VD: `db.config.ts`, `b2.config.ts`, `env.ts`).
- `src/controllers/`: Nhận Request, trích xuất dữ liệu, gọi đến `services`, và trả về Response. KHÔNG viết logic nghiệp vụ hay query DB ở đây.
- `src/generated/`: File auto-generated (Prisma Client, Types). AI tuyệt đối KHÔNG ĐƯỢC tự ý sửa code trong này.
- `src/middlewares/`: Express middlewares (VD: `auth.middleware.ts`, `error.middleware.ts`, `validate.middleware.ts`).
- `src/routes/`: Định nghĩa Express Router, gắn middlewares và map với `controller`.
- `src/schemas/`: TOÀN BỘ các Zod Schemas dùng để validate Request.
- `src/services/`: "Trái tim" của Backend. Chứa 100% Business Logic và tương tác Prisma. Phải độc lập với Express (không nhận `req`, `res`) để dễ viết Unit Test.
- `src/utils/`: Helper functions (VD: `catch-async.ts`, `app-error.ts`, `jwt.util.ts`).

---

# 3. ERROR HANDLING & VALIDATION
- **Controller:** KHÔNG dùng `try/catch` lặp đi lặp lại. Bọc toàn bộ controller bằng hàm `catchAsync` (từ `src/utils/`).
- **Services:** Quăng lỗi logic bằng Custom Class: `throw new AppError('Message', statusCode)` (từ `src/utils/`).
- **Global Error Handler:** Bắt mọi lỗi tại `globalErrorHandler` (trong `src/middlewares/`) và tuyệt đối KHÔNG trả lỗi "tự do" (raw text). Phải format chuẩn:
  ```json
  {
    "success": false,
    "message": "Validation failed",
    "error": {
      "code": "VALIDATION_ERROR", 
      "details": [] 
    }
  }
- **Validation:** Chặn dữ liệu sai ngay tại route bằng middleware kết hợp với Zod schemas.

---

# 4. STORAGE (BACKBLAZE B2)
- Tương tác với B2 thông qua AWS SDK S3 client (`@aws-sdk/client-s3`).
- **Luồng upload file:** Back-end CHỈ làm nhiệm vụ sinh ra **Presigned URL** từ S3 client và trả về cho Front-end. Không nhận trực tiếp file buffer qua req để giảm tải server.

---

# 5. RESTful API DESIGN & REQUEST/RESPONSE STANDARDS
Tuân thủ nghiêm ngặt các tiêu chuẩn thiết kế API sau:

Quy tắc URL:

Dùng danh từ (noun), tuyệt đối không dùng động từ (verb).

Dùng chữ thường (lowercase).

Dùng dấu gạch ngang (-) thay vì gạch dưới (_).

Dùng số nhiều (plural) cho resource (VD: /api/users, không dùng /api/user).

URL phải ngắn gọn, dễ hiểu, nhất quán.

HTTP Methods & Endpoints:

GET    /api/{resource}: Lấy danh sách resource.

GET    /api/{resource}/{id}: Lấy chi tiết 1 resource.

POST   /api/{resource}: Tạo mới resource.

PUT    /api/{resource}/{id}: Cập nhật toàn bộ resource.

PATCH  /api/{resource}/{id}: Cập nhật một phần resource.

DELETE /api/{resource}/{id}: Xóa resource.

HTTP Status Codes:

200: Thành công.

201: Tạo thành công.

400: Lỗi request (Bad Request / Validation).

401: Chưa xác thực (Unauthorized).

404: Không tìm thấy (Not Found).

500: Lỗi server (Internal Server Error).

Định dạng Request tiêu chuẩn:

HTTP
METHOD /api/{resource}
Headers: 
  Content-Type: application/json
  Authorization: Bearer <token>
Body: { ... }
Định dạng Response THÀNH CÔNG tiêu chuẩn:
Bắt buộc mọi API thành công phải trả về cấu trúc này:

JSON
{
  "success": true,
  "data": {}, // object hoặc array
  "message": "Thao tác thành công"
}

---

# 6. WORKFLOW MẪU
- Đảm bảo code do AI sinh ra chuẩn format ESLint/Prettier.

---

# 7. NGUYÊN TẮC COMMENT
- Luôn luôn comment bằng tiếng Việt