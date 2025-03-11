import { useState } from "react";

// 定义应用类型
interface App {
  id: string;
  name: string;
  description: string;
  installed: boolean;
}

function AppStore() {
  // 示例应用数据
  const [apps, setApps] = useState<App[]>([
    { id: "1", name: "应用1", description: "这是应用1的描述信息", installed: false },
    { id: "2", name: "应用2", description: "这是应用2的描述信息", installed: false },
    { id: "3", name: "应用3", description: "这是一个功能强大的工具应用", installed: true },
    { id: "4", name: "应用4", description: "提高生产力的必备应用", installed: false },
    { id: "5", name: "应用5", description: "简单易用的日常工具", installed: false },
    { id: "6", name: "应用6", description: "专业的数据分析工具", installed: true },
    { id: "7", name: "应用7", description: "高效的项目管理软件", installed: false },
    { id: "8", name: "应用8", description: "智能的文档处理工具", installed: false },
  ]);

  // 处理安装/卸载应用
  const handleInstallToggle = (id: string) => {
    setApps(apps.map(app => 
      app.id === id ? { ...app, installed: !app.installed } : app
    ));
  };

  return (
    <main className="container">
      <h1>应用中心</h1>
      
      <div className="app-grid">
        {apps.map(app => (
          <div key={app.id} className="app-card">
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            <button 
              onClick={() => handleInstallToggle(app.id)}
              className={app.installed ? "uninstall-btn" : "install-btn"}
            >
              {app.installed ? "卸载" : "安装"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AppStore;