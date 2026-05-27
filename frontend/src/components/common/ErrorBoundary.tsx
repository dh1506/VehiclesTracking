import React from 'react'

// Component Error Boundary toàn cục
// Mọi comment bằng tiếng Việt theo quy tắc fe.md
type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(_error: any, _info: any) {
    // Ghi log lỗi ra service nếu cần (Sentry, LogRocket,...)
    // TODO: gửi error và info lên server logging
    // console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-white rounded shadow p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Đã xảy ra lỗi</h2>
            <p className="mb-4 text-sm text-muted-foreground">Ứng dụng gặp sự cố. Vui lòng thử tải lại trang.</p>
            <div className="flex gap-3 justify-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => window.location.reload()}>Tải lại</button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
