import { setupDirective } from "@/directive";
import { setupRouter } from "@/router";
import { setupStore } from "@/store";
import type { App } from "vue";
import { setupElIcons } from "./icons";

export default {
  install(app: App<Element>) {
    // 自定义指令(directive)
    setupDirective(app);
    // 路由(router)
    setupRouter(app);
    // 状态管理(store)
    setupStore(app);
    // Element-plus图标
    setupElIcons(app);
  },
};
