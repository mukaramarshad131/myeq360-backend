// vite.config.ts
import { Agent } from "https";
import path from "path";
import react from "file:///C:/Users/Crexed-03/Documents/GitHub/myeq360dashboard/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { visualizer } from "file:///C:/Users/Crexed-03/Documents/GitHub/myeq360dashboard/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { defineConfig } from "file:///C:/Users/Crexed-03/Documents/GitHub/myeq360dashboard/node_modules/vite/dist/node/index.js";
import { createSvgIconsPlugin } from "file:///C:/Users/Crexed-03/Documents/GitHub/myeq360dashboard/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import tsconfigPaths from "file:///C:/Users/Crexed-03/Documents/GitHub/myeq360dashboard/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  base: "./",
  esbuild: {
    // drop: ['console', 'debugger'],
  },
  css: {
    // 开css sourcemap方便找css
    devSourcemap: true
  },
  plugins: [
    react(),
    // 同步tsconfig.json的path设置alias
    tsconfigPaths(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]"
    }),
    visualizer({
      open: false
    })
  ],
  server: {
    // 自动打开浏览器
    open: true,
    host: true,
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/api/, ""),
        // https://github.com/vitejs/vite/discussions/8998#discussioncomment-4408695
        agent: new Agent({ keepAlive: true, keepAliveMsecs: 2e4 })
      }
    }
  },
  build: {
    target: "esnext",
    minify: "terser",
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         // 让每个插件都打包成独立的文件
    //         return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //       }
    //       return null;
    //     },
    //   },
    // },
    terserOptions: {
      compress: {
        // 生产环境移除console
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxDcmV4ZWQtMDNcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxteWVxMzYwZGFzaGJvYXJkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxDcmV4ZWQtMDNcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxteWVxMzYwZGFzaGJvYXJkXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9DcmV4ZWQtMDMvRG9jdW1lbnRzL0dpdEh1Yi9teWVxMzYwZGFzaGJvYXJkL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgQWdlbnQgfSBmcm9tICdodHRwcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcic7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiAnLi8nLFxyXG4gIGVzYnVpbGQ6IHtcclxuICAgIC8vIGRyb3A6IFsnY29uc29sZScsICdkZWJ1Z2dlciddLFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICAvLyBcdTVGMDBjc3Mgc291cmNlbWFwXHU2NUI5XHU0RkJGXHU2MjdFY3NzXHJcbiAgICBkZXZTb3VyY2VtYXA6IHRydWUsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgLy8gXHU1NDBDXHU2QjY1dHNjb25maWcuanNvblx1NzY4NHBhdGhcdThCQkVcdTdGNkVhbGlhc1xyXG4gICAgdHNjb25maWdQYXRocygpLFxyXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICAvLyBcdTYzMDdcdTVCOUFcdTk3MDBcdTg5ODFcdTdGMTNcdTVCNThcdTc2ODRcdTU2RkVcdTY4MDdcdTY1ODdcdTRFRjZcdTU5MzlcclxuICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvaWNvbnMnKV0sXHJcbiAgICAgIC8vIFx1NjMwN1x1NUI5QXN5bWJvbElkXHU2ODNDXHU1RjBGXHJcbiAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxyXG4gICAgfSksXHJcbiAgICB2aXN1YWxpemVyKHtcclxuICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgLy8gXHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2RDRGXHU4OUM4XHU1NjY4XHJcbiAgICBvcGVuOiB0cnVlLFxyXG4gICAgaG9zdDogdHJ1ZSxcclxuICAgIHBvcnQ6IDMwMDEsXHJcbiAgICBwcm94eToge1xyXG4gICAgICAnL2FwaSc6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS9kaXNjdXNzaW9ucy84OTk4I2Rpc2N1c3Npb25jb21tZW50LTQ0MDg2OTVcclxuICAgICAgICBhZ2VudDogbmV3IEFnZW50KHsga2VlcEFsaXZlOiB0cnVlLCBrZWVwQWxpdmVNc2VjczogMjAwMDAgfSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHRhcmdldDogJ2VzbmV4dCcsXHJcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxyXG4gICAgLy8gcm9sbHVwT3B0aW9uczoge1xyXG4gICAgLy8gICBvdXRwdXQ6IHtcclxuICAgIC8vICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgIC8vICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcclxuICAgIC8vICAgICAgICAgLy8gXHU4QkE5XHU2QkNGXHU0RTJBXHU2M0QyXHU0RUY2XHU5MEZEXHU2MjUzXHU1MzA1XHU2MjEwXHU3MkVDXHU3QUNCXHU3Njg0XHU2NTg3XHU0RUY2XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBpZC50b1N0cmluZygpLnNwbGl0KCdub2RlX21vZHVsZXMvJylbMV0uc3BsaXQoJy8nKVswXS50b1N0cmluZygpO1xyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIH0sXHJcbiAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgIGNvbXByZXNzOiB7XHJcbiAgICAgICAgLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU3OUZCXHU5NjY0Y29uc29sZVxyXG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcclxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVixTQUFTLGFBQWE7QUFDaFgsT0FBTyxVQUFVO0FBRWpCLE9BQU8sV0FBVztBQUNsQixTQUFTLGtCQUFrQjtBQUMzQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLG1CQUFtQjtBQUcxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUE7QUFBQSxFQUVUO0FBQUEsRUFDQSxLQUFLO0FBQUE7QUFBQSxJQUVILGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFFTixjQUFjO0FBQUEsSUFDZCxxQkFBcUI7QUFBQTtBQUFBLE1BRW5CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFBQTtBQUFBLE1BRTFELFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQ0EsVUFBU0EsTUFBSyxRQUFRLFVBQVUsRUFBRTtBQUFBO0FBQUEsUUFFNUMsT0FBTyxJQUFJLE1BQU0sRUFBRSxXQUFXLE1BQU0sZ0JBQWdCLElBQU0sQ0FBQztBQUFBLE1BQzdEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFZUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxRQUVSLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
