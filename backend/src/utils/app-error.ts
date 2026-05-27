// Lớp lỗi tùy chỉnh cho nghiệp vụ — phân biệt lỗi logic và lỗi hệ thống

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly code: string;

  constructor(message: string, statusCode: number, code?: string) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Lỗi được kiểm soát bởi nghiệp vụ
    this.code = code ?? AppError.getDefaultCode(statusCode);

    // Giữ stack trace đúng trong V8
    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, AppError.prototype);
  }

  // Tự động gán code mặc định theo HTTP status
  private static getDefaultCode(statusCode: number): string {
    const codeMap: Record<number, string> = {
      400: 'BAD_REQUEST',
      401: 'UNAUTHORIZED',
      403: 'FORBIDDEN',
      404: 'NOT_FOUND',
      409: 'CONFLICT',
      422: 'UNPROCESSABLE_ENTITY',
      500: 'INTERNAL_SERVER_ERROR',
    };
    return codeMap[statusCode] ?? 'UNKNOWN_ERROR';
  }
}
