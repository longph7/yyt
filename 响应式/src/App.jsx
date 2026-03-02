import { Header, Sidebar, Card, Layout } from './components'
import './App.css'

function App() {
  return (
    <Layout
      header={<Header />}
      sidebar={<Sidebar />}
    >
      <div className="mb-4">
        <h2 className="mb-3">Bootstrap 响应式布局示例</h2>
        <p>试着调整浏览器窗口大小来查看布局如何响应式调整。</p>
      </div>

      {/* 使用 Bootstrap 卡片展示响应式信息 */}
      <div className="row mb-4">
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <Card title="移动端（< 576px）">
            <p className="mb-0">单列布局，侧边栏隐藏</p>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <Card title="平板（≥ 576px）">
            <p className="mb-0">2 列布局，侧边栏隐藏</p>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <Card title="桌面（≥ 992px）">
            <p className="mb-0">完整布局，侧边栏 2 列</p>
          </Card>
        </div>
      </div>

      {/* Bootstrap 响应式 Grid 示例 */}
      <h3 className="mb-3">Bootstrap 响应式 Grid 示例</h3>

      {/* 1. 手机 1 列，平板 2 列，桌面 3 列 */}
      <div className="row mb-4">
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <Card title="col-12 col-md-6 col-lg-4">
            <p className="mb-0">手机占 12 列（1 列）</p>
            <p className="mb-0">平板占 6 列（2 列）</p>
            <p className="mb-0">桌面占 4 列（3 列）</p>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <Card title="col-12 col-md-6 col-lg-4">
            <p className="mb-0">手机占 12 列（1 列）</p>
            <p className="mb-0">平板占 6 列（2 列）</p>
            <p className="mb-0">桌面占 4 列（3 列）</p>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <Card title="col-12 col-md-6 col-lg-4">
            <p className="mb-0">手机占 12 列（1 列）</p>
            <p className="mb-0">平板占 6 列（2 列）</p>
            <p className="mb-0">桌面占 4 列（3 列）</p>
          </Card>
        </div>
      </div>

      {/* 2. 手机 1 列，平板 3 列，桌面 4 列 */}
      <div className="row mb-4">
        <div className="col-12 col-sm-4 col-lg-3 mb-3">
          <Card title="col-12 col-sm-4 col-lg-3">
            <p className="mb-0">手机占 12 列</p>
            <p className="mb-0">平板占 4 列（3 列）</p>
            <p className="mb-0">桌面占 3 列（4 列）</p>
          </Card>
        </div>
        <div className="col-12 col-sm-4 col-lg-3 mb-3">
          <Card title="col-12 col-sm-4 col-lg-3">
            <p className="mb-0">手机占 12 列</p>
            <p className="mb-0">平板占 4 列（3 列）</p>
            <p className="mb-0">桌面占 3 列（4 列）</p>
          </Card>
        </div>
        <div className="col-12 col-sm-4 col-lg-3 mb-3">
          <Card title="col-12 col-sm-4 col-lg-3">
            <p className="mb-0">手机占 12 列</p>
            <p className="mb-0">平板占 4 列（3 列）</p>
            <p className="mb-0">桌面占 3 列（4 列）</p>
          </Card>
        </div>
        <div className="col-12 col-sm-4 col-lg-3 mb-3">
          <Card title="col-12 col-sm-4 col-lg-3">
            <p className="mb-0">手机占 12 列</p>
            <p className="mb-0">平板占 4 列（3 列）</p>
            <p className="mb-0">桌面占 3 列（4 列）</p>
          </Card>
        </div>
      </div>

      {/* 3. 不同比例的列宽 */}
      <h3 className="mb-3">不同比例的列宽</h3>
      <div className="row mb-4">
        <div className="col-12 col-lg-8 mb-3">
          <Card title="col-12 col-lg-8">
            <p className="mb-0">手机占 12 列（100%）</p>
            <p className="mb-0">桌面占 8 列（66.67%）</p>
          </Card>
        </div>
        <div className="col-12 col-lg-4 mb-3">
          <Card title="col-12 col-lg-4">
            <p className="mb-0">手机占 12 列（100%）</p>
            <p className="mb-0">桌面占 4 列（33.33%）</p>
          </Card>
        </div>
      </div>

      {/* 4. 嵌套网格 */}
      <h3 className="mb-3">嵌套网格</h3>
      <div className="row mb-4">
        <div className="col-12 col-md-6 mb-3">
          <Card title="外部容器 - col-12 col-md-6">
            <div className="row">
              <div className="col-6">
                <small>内部 col-6</small>
              </div>
              <div className="col-6">
                <small>内部 col-6</small>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <Card title="外部容器 - col-12 col-md-6">
            <div className="row">
              <div className="col-4">
                <small>内部 col-4</small>
              </div>
              <div className="col-8">
                <small>内部 col-8</small>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default App
