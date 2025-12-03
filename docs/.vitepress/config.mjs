import {defineConfig} from "vitepress"
import {GitChangelog, GitChangelogMarkdownSection,} from "@nolebase/vitepress-plugin-git-changelog/vite"

export default defineConfig({
    vite: {
        plugins: [
            GitChangelog({
                repoURL: () => "https://github.com/hd-zero/hdzero-docs",
                mapAuthors: [
                    {
                        name: "Eason FPV",
                        username: "ZhouYixun",
                        mapByEmailAliases: ["easonfpv@gmail.com", "291028775@qq.com"],
                    },
                    {
                        name: "Alexey Rodin",
                        username: "lesharodin",
                        mapByEmailAliases: ["lesharodin@gmail.com"],
                    },
                    {
                        name: "Ligen",
                        username: "ligenxxxx",
                        mapByEmailAliases: ["ligenxxxx@gmail.com"],
                    },
                ],
            }),
            GitChangelogMarkdownSection({
                exclude: (id) => id.endsWith("index.md"),
            }),
        ],
    },
    head: [["link", {rel: "icon", href: "/short-icon.png"}]],
    title: "HDZero",
    description:
        "HDZero offers industry-leading low latency, giving you more time to react and the best possible chance of hitting that next gap. With its smooth, consistent FPV video feed, you'll experience the same locked-in feeling you get with analog video–but with the clarity of HD.",
    themeConfig: {
        logo: "/short-icon.png",

        socialLinks: [
            {icon: "github", link: "https://github.com/hd-zero"},
            {icon: "discord", link: "https://discord.gg/kGsnEDMb2V"},
            {icon: "facebook", link: "https://www.facebook.com/groups/hdzero"},
        ],
        lastUpdated: true,
        search: {
            provider: "local",
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: "搜索文档",
                                buttonAriaLabel: "搜索文档",
                            },
                            modal: {
                                noResultsText: "无法找到相关结果",
                                resetButtonTitle: "清除查询条件",
                                footer: {
                                    selectText: "选择",
                                    navigateText: "切换",
                                },
                            },
                        },
                    },
                    ru: {
                        translations: {
                            button: {
                                buttonText: "Поиск",
                                buttonAriaLabel: "Поиск",
                            },
                            modal: {
                                noResultsText: "Не найдено",
                                resetButtonTitle: "Стереть",
                                footer: {
                                    selectText: "Выбор",
                                    navigateText: "Навигация",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    locales: {
        root: {
            label: "English",
            lang: "en",
            themeConfig: {
                editLink: {
                    pattern:
                        "https://github.com/hd-zero/hdzero-docs/edit/main/docs/:path",
                },
                nav: [{text: "Documents", link: "/"}],
                sidebar: [
                    {
                        text: "Home",
                        items: [{text: "What is HDZero?", link: "/"}],
                    },
                    {
                        text: "VTX",
                        items: [
                            {
                                text: "HDZero VTX Products",
                                link: "/vtx-summary",
                                collapsed: true,
                                items: [
                                    {text: "Whoop V2 VTX", link: "/whoop-v2"},
                                    {text: "Race V3 VTX", link: "/race-v3"},
                                    {text: "Freestyle V2 VTX", link: "/freestyle-v2"},
                                    {text: "ECO VTX", link: "/eco-bundle"},
                                ],
                            },
                            {text: "VTX Installation Diagram", link: "/vtx-installation"},
                            {text: "General Considerations", link: "/vtx-general"},
                            {text: "VTX LED Pattern", link: "/vtx-led"},
                            {
                                text: "VTX Firmware Update Guide",
                                link: "/vtx-firmware-update",
                            },
                            {text: "VTX Sockets", link: "/vtx-sockets"},
                            {text: "FAQ", link: "/vtx-faq"},
                            {
                                text: "Discontinued Video Transmitters",
                                link: "/vtx-dis-summary",
                                collapsed: true,
                                items: [
                                    {text: "Whoop VTX", link: "/whoop"},
                                    {text: "Whoop lite VTX", link: "/whoop-lite"},
                                    {text: "Race V1 VTX", link: "/race-v1"},
                                    {text: "Race V2 VTX", link: "/race-v2"},
                                    {text: "Freestyle V1 VTX", link: "/freestyle-v1"},
                                ],
                            },
                            {text: "Warranty", link: "/vtx-warranty"},
                        ],
                    },
                    {
                        text: "VRX",
                        items: [
                            {
                                text: "Box Pro",
                                link: "/box-introduction",
                                collapsed: true,
                                items: [
                                    {text: "Setup", link: "/box-setup"},
                                    {text: "Operation", link: "/box-operation"},
                                    {text: "Firmware Update", link: "/box-firmware-update"},
                                    {text: "Troubleshooting", link: "/box-troubleshooting"},
                                    {text: "Warranty", link: "/box-warranty"},
                                ],
                            },
                            {
                                text: "Goggles",
                                link: "/goggles-introduction",
                                collapsed: true,
                                items: [
                                    {text: "Setup", link: "/goggles-setup"},
                                    {text: "Operation", link: "/goggles-operation"},
                                    {text: "Firmware Update", link: "/goggles-firmware-update"},
                                    {text: "Troubleshooting", link: "/goggles-troubleshooting"},
                                    {
                                        text: "OLED Display Disclaimer",
                                        link: "/goggles-oled-display-disclaimer",
                                    },
                                    {text: "Warranty", link: "/goggles-warranty"},
                                ],
                            },
                            {
                                text: "Monitor",
                                link: "/monitor-introduction",
                                collapsed: true,
                                items: [
                                    {text: "Setup", link: "/monitor-setup"},
                                    {text: "Operation", link: "/monitor-operation"},
                                    {text: "Firmware Update", link: "/monitor-firmware-update"},
                                ],
                            },
                            {
                                text: "Event VRX",
                                link: "/event-introduction",
                                collapsed: true,
                                items: [
                                    {text: "Operation", link: "/event-operation"},
                                    {text: "Firmware Update", link: "/event-firmware-update"},
                                ],
                            },
                        ],
                    },
                    {
                        text: "FC & ESC",
                        items: [
                            {
                                text: "Halo Stack",
                                link: "/halo-stack-introduction",
                                collapsed: true,
                                items: [
                                    {
                                        text: "Halo Flight Controller",
                                        link: "/halo-introduction",
                                        collapsed: true,
                                        items: [
                                            {text: "Wiring", link: "/halo-wiring"},
                                            {text: "Bind with ELRS", link: "/halo-bind"},
                                            {text: "Firmware", link: "/halo-firmware"},
                                        ],
                                    },
                                    {
                                        text: "Halo 4in1 70A ESC",
                                        link: "/halo-esc-introduction",
                                        collapsed: true,
                                        items: [
                                            {text: "Wiring", link: "/halo-esc-wiring"},
                                            {text: "Firmware", link: "/halo-esc-firmware"},
                                        ],
                                    },
                                ],
                            },
                            {
                                text: "AIO5",
                                link: "/aio5-introduction",
                                collapsed: true,
                                items: [
                                    {text: "Installation", link: "/aio5-installation"},
                                    {text: "Bind with ELRS", link: "/aio5-bind"},
                                    {text: "Firmware", link: "/aio5-firmware"},
                                ],
                            },
                            {
                                text: "AIO15",
                                link: "/aio15-introduction",
                                collapsed: true,
                                items: [
                                    {text: "Installation", link: "/aio15-installation"},
                                    {text: "Bind with ELRS", link: "/aio15-bind"},
                                    {text: "Firmware", link: "/aio15-firmware"},
                                ],
                            },
                        ],
                    },
                    {
                        text: "Camera",
                        items: [
                            {
                                text: "HDZero Camera Products",
                                link: "/camera-summary.md",
                                collapsed: true,
                                items: [
                                    {text: "Nano90 V2 Camera", link: "/camera-nano90-v2.md"},
                                    {text: "Micro V3 Camera", link: "/camera-micro-v3.md"},
                                    {text: "Nano V3 Camera", link: "/camera-nano-v3.md"},
                                    {text: "ECO Camera", link: "/camera-eco.md"},
                                    {text: "Lux Camera", link: "/camera-lux.md"},
                                ],
                            },
                            {
                                text: "Discontinued Cameras",
                                link: "/camera-dis-summary.md",
                                collapsed: true,
                                items: [
                                    {text: "Nano90 Camera", link: "/camera-nano90.md"},
                                    {text: "Micro V2 Camera", link: "/camera-micro-v2.md"},
                                    {text: "Nano Camera", link: "/camera-nano.md"},
                                    {text: "Nano lite Camera", link: "/camera-nano-lite.md"},
                                    {text: "Nano V2 Camera", link: "/camera-nano-v2.md"},
                                ],
                            },
                        ],
                    },
                ],
            },
        },
        zh: {
            label: "简体中文",
            lang: "zh-CN",
            link: "/zh",
            themeConfig: {
                editLink: {
                    pattern:
                        "https://github.com/hd-zero/hdzero-docs/edit/main/docs/:path",
                    text: "在 GitHub 上编辑",
                },
                nav: [{text: "文档", link: "/zh/"}],
                sidebar: [
                    {
                        text: "首页",
                        items: [{text: "什么是 HDZero?", link: "/zh/"}],
                    },
                    {
                        text: "视频发射机",
                        items: [
                            {
                                text: "HDZero 图传产品",
                                link: "/zh/vtx-summary",
                                collapsed: true,
                                items: [
                                    {text: "Whoop V2 图传", link: "/zh/whoop-v2"},
                                    {text: "Race V3 图传", link: "/zh/race-v3"},
                                    {text: "Freestyle V2 图传", link: "/zh/freestyle-v2"},
                                    {text: "ECO 图传", link: "/zh/eco-bundle"},
                                ],
                            },
                            {text: "安装示意图", link: "/zh/vtx-installation"},
                            {text: "基础说明", link: "/zh/vtx-general"},
                            {text: "图传 LED 模式", link: "/zh/vtx-led"},
                            {text: "图传固件更新指南", link: "/zh/vtx-firmware-update"},
                            {text: "图传插座", link: "/zh/vtx-sockets"},
                            {text: "常问问题", link: "/zh/vtx-faq"},
                            {text: "保修", link: "/zh/vtx-warranty"},
                        ],
                    },
                    {
                        text: "视频接收机",
                        items: [
                            {
                                text: "Box Pro 盒式眼镜",
                                link: "/zh/box-introduction",
                                collapsed: true,
                                items: [
                                    {text: "设置", link: "/zh/box-setup"},
                                    {text: "操作说明", link: "/zh/box-operation"},
                                    {text: "固件更新", link: "/zh/box-firmware-update"},
                                    {text: "多语言支持", link: "/zh/box-lang"},
                                    {text: "故障排除", link: "/zh/box-troubleshooting"},
                                    {text: "保修", link: "/zh/box-warranty"},
                                ],
                            },
                            {
                                text: "Goggles 眼镜",
                                link: "/zh/goggles-introduction",
                                collapsed: true,
                                items: [
                                    {text: "设置", link: "/zh/goggles-setup"},
                                    {text: "操作说明", link: "/zh/goggles-operation"},
                                    {text: "固件更新", link: "/zh/goggles-firmware-update"},
                                    {text: "多语言支持", link: "/zh/goggles-lang"},
                                    {text: "故障排除", link: "/zh/goggles-troubleshooting"},
                                    {
                                        text: "OLED 显示屏免责声明",
                                        link: "/zh/goggles-oled-display-disclaimer",
                                    },
                                    {text: "保修", link: "/zh/goggles-warranty"},
                                ],
                            },
                            {
                                text: "Monitor 小飞手",
                                link: "/zh/monitor-introduction",
                                collapsed: true,
                                items: [
                                    {text: "设置", link: "/zh/monitor-setup"},
                                    {text: "操作说明", link: "/zh/monitor-operation"},
                                    {text: "固件更新", link: "/zh/monitor-firmware-update"},
                                ],
                            },
                            {
                                text: "Event VRX 接收机",
                                link: "/zh/event-introduction",
                                collapsed: true,
                                items: [
                                    {text: "操作说明", link: "/zh/event-operation"},
                                    {text: "固件更新", link: "/zh/event-firmware-update"},
                                ],
                            },
                        ],
                    },
                    {
                        text: "飞控 & 电调",
                        items: [
                            {
                                text: "Halo 飞塔",
                                link: "/zh/halo-stack-introduction",
                                collapsed: true,
                                items: [
                                    {
                                        text: "Halo 飞控",
                                        link: "/zh/halo-introduction",
                                        collapsed: true,
                                        items: [
                                            {text: "接线", link: "/zh/halo-wiring"},
                                            {text: "与 ELRS 遥控器绑定", link: "/zh/halo-bind"},
                                            {text: "固件", link: "/zh/halo-firmware"},
                                        ],
                                    },
                                    {
                                        text: "Halo 4in1 70A 电调",
                                        link: "/zh/halo-esc-introduction",
                                        collapsed: true,
                                        items: [
                                            {text: "接线", link: "/zh/halo-esc-wiring"},
                                            {text: "固件", link: "/zh/halo-esc-firmware"},
                                        ],
                                    },
                                ],
                            },
                            {
                                text: "AIO5",
                                link: "/zh/aio5-introduction",
                                collapsed: true,
                                items: [
                                    {text: "安装", link: "/zh/aio5-installation"},
                                    {text: "与 ELRS 遥控器绑定", link: "/zh/aio5-bind"},
                                    {text: "固件", link: "/zh/aio5-firmware"},
                                ],
                            },
                            {
                                text: "AIO15",
                                link: "/zh/aio15-introduction",
                                collapsed: true,
                                items: [
                                    {text: "安装", link: "/zh/aio15-installation"},
                                    {text: "与 ELRS 遥控器绑定", link: "/zh/aio15-bind"},
                                    {text: "固件", link: "/zh/aio15-firmware"},
                                ],
                            },
                        ],
                    },
                    {
                        text: "摄像头",
                        items: [
                            {
                                text: "HDZero 摄像头产品",
                                link: "/zh/camera-summary.md",
                                collapsed: true,
                                items: [
                                    {text: "Nano90 V2 摄像头", link: "/zh/camera-nano90-v2.md"},
                                    {text: "Micro V3 摄像头", link: "/zh/camera-micro-v3.md"},
                                    {text: "Nano V3 摄像头", link: "/zh/camera-nano-v3.md"},
                                    {text: "ECO 摄像头", link: "/zh/camera-eco.md"},
                                    {text: "Lux 摄像头", link: "/zh/camera-lux.md"},
                                ],
                            },
                            {
                                text: "已停产摄像头",
                                link: "/zh/camera-dis-summary.md",
                                collapsed: true,
                                items: [
                                    {text: "Nano90 摄像头", link: "/zh/camera-nano90.md"},
                                    {text: "Micro V2 摄像头", link: "/zh/camera-micro-v2.md"},
                                    {text: "Nano 摄像头", link: "/zh/camera-nano.md"},
                                    {text: "Nano lite 摄像头", link: "/zh/camera-nano-lite.md"},
                                    {text: "Nano V2 摄像头", link: "/zh/camera-nano-v2.md"},
                                ],
                            },
                        ],
                    },
                ],
            },
        },
        ru: {
            label: "Русский",
            lang: "ru-RU",
            link: "/ru",
            themeConfig: {
                editLink: {
                    pattern:
                        "https://github.com/hd-zero/hdzero-docs/edit/main/docs/:path",
                    text: "Редактировать на GitHub",
                },
                nav: [{text: "Документы", link: "/ru/"}],
                sidebar: [
                    {
                        text: "Главная",
                        items: [{text: "Что такое HDZero?", link: "/ru/"}],
                    },
                    {
                        text: "Передатчики (VTX)",
                        items: [
                            {
                                text: "HDZero VTX",
                                link: "/ru/vtx-summary",
                                collapsed: true,
                                items: [
                                    {text: "Whoop V2 VTX", link: "/ru/whoop-v2"},
                                    {text: "Race V3 VTX", link: "/ru/race-v3"},
                                    {text: "Freestyle V2 VTX", link: "/ru/freestyle-v2"},
                                    {text: "ECO VTX", link: "/ru/eco-bundle"},
                                ],
                            },
                            {text: "Схема установки VTX", link: "/ru/vtx-installation"},
                            {text: "Основные рекомендации", link: "/ru/vtx-general"},
                            {text: "LED-индикация VTX", link: "/ru/vtx-led"},
                            {text: "Обновление прошивки", link: "/ru/vtx-firmware-update"},
                            {text: "VTX Sockets", link: "/ru/vtx-sockets"},
                            {text: "Часто задаваемые вопросы", link: "/ru/vtx-faq"},
                            {text: "Гарантия", link: "/ru/vtx-warranty"},
                        ],
                    },
                    {
                        text: "Camera",
                        items: [
                            {
                                text: "HDZero Camera Products",
                                link: "/ru/camera-summary.md",
                                collapsed: true,
                                items: [
                                    {text: "Nano90 V2 Camera", link: "/ru/camera-nano90-v2.md"},
                                    {text: "Micro V3 Camera", link: "/ru/camera-micro-v3.md"},
                                    {text: "Nano V3 Camera", link: "/ru/camera-nano-v3.md"},
                                    {text: "ECO Camera", link: "/ru/camera-eco.md"},
                                    {text: "Lux Camera", link: "/ru/camera-lux.md"},
                                ],
                            },
                            {
                                text: "Discontinued Cameras",
                                link: "/ru/camera-dis-summary.md",
                                collapsed: true,
                                items: [
                                    {text: "Nano90 Camera", link: "/ru/camera-nano90.md"},
                                    {text: "Micro V2 Camera", link: "/ru/camera-micro-v2.md"},
                                    {text: "Nano Camera", link: "/ru/camera-nano.md"},
                                    {text: "Nano lite Camera", link: "/ru/camera-nano-lite.md"},
                                    {text: "Nano V2 Camera", link: "/ru/camera-nano-v2.md"},
                                ],
                            },
                        ],
                    },
                ],
            },
        },
        de: {
            label: "Deutsch",
            lang: "de-DE",
            link: "/de",
            themeConfig: {
                editLink: {
                    pattern:
                        "https://github.com/hd-zero/hdzero-docs/edit/main/docs/:path",
                },
                nav: [{text: "Dokumentation", link: "/"}],
                sidebar: [
                    {
                        text: "Home",
                        items: [{text: "Was ist HDZero?", link: "/"}],
                    },
                    {
                        text: "VTX",
                        items: [
                            {
                                text: "HDZero VTX Produkte",
                                link: "/vtx-summary",
                                collapsed: true,
                                items: [
                                    {text: "Whoop V2 VTX", link: "/whoop-v2"},
                                    {text: "Race V3 VTX", link: "/race-v3"},
                                    {text: "Freestyle V2 VTX", link: "/freestyle-v2"},
                                    {text: "ECO VTX", link: "/eco-bundle"},
                                ],
                            },
                            {text: "VTX Installationsdiagramm ", link: "/vtx-installation"},
                            {text: "Allgemeine Erwägungen", link: "/vtx-general"},
                            {text: "VTX LED-Muster", link: "/vtx-led"},
                            {
                                text: "VTX Anleitung zum Firmware-Update",
                                link: "/vtx-firmware-update",
                            },
                            {text: "VTX Anschluss", link: "/vtx-sockets"},
                            {text: "FAQ", link: "/vtx-faq"},
                            {
                                text: "Auslaufende Videosender",
                                link: "/vtx-dis-summary",
                                collapsed: true,
                                items: [
                                    {text: "Whoop VTX", link: "/whoop"},
                                    {text: "Whoop lite VTX", link: "/whoop-lite"},
                                    {text: "Race V1 VTX", link: "/race-v1"},
                                    {text: "Race V2 VTX", link: "/race-v2"},
                                    {text: "Freestyle V1 VTX", link: "/freestyle-v1"},
                                ],
                            },
                            {text: "Garantie / Gewährleistung", link: "/vtx-warranty"},
                        ],
                    },
                    {
                        text: "VRX",
                        items: [
                            {
                                text: "Box Pro",
                                link: "/box-introduction",
                                collapsed: true,
                                items: [
                                    {text: "Einrichtung", link: "/box-setup"},
                                    {text: "Betrieb", link: "/box-operation"},
                                    {
                                        text: "Firmware-Aktualisierung",
                                        link: "/box-firmware-update",
                                    },
                                    {text: "Fehlerbehebung", link: "/box-troubleshooting"},
                                    {text: "Garantie / Gewährleistung", link: "/box-warranty"},
                                ],
                            },
                            {
                                text: "Goggles",
                                link: "/goggles-introduction",
                                collapsed: true,
                                items: [
                                    {text: "Einrichtung", link: "/goggles-setup"},
                                    {text: "Betrieb", link: "/goggles-operation"},
                                    {
                                        text: "Firmware-Aktualisierung",
                                        link: "/goggles-firmware-update",
                                    },
                                    {text: "Fehlerbehebung", link: "/goggles-troubleshooting"},
                                    {
                                        text: "Haftungsausschluss für OLED-Displays",
                                        link: "/goggles-oled-display-disclaimer",
                                    },
                                    {
                                        text: "Garantie / Gewährleistung",
                                        link: "/goggles-warranty",
                                    },
                                ],
                            },
                            {
                                text: "Monitor",
                                link: "/monitor-introduction",
                                collapsed: true,
                                items: [
                                    {text: "Einrichtung", link: "/monitor-setup"},
                                    {text: "Betrieb", link: "/monitor-operation"},
                                    {
                                        text: "Firmware-Aktualisierung",
                                        link: "/monitor-firmware-update",
                                    },
                                ],
                            },
                            {
                                text: "Event VRX",
                                link: "/event-introduction",
                                collapsed: true,
                                items: [
                                    {text: "Betrieb", link: "/event-operation"},
                                    {
                                        text: "Firmware-Aktualisierung",
                                        link: "/event-firmware-update",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        text: "FC & ESC",
                        items: [
                            {
                                text: "Halo Stack",
                                link: "/halo-stack-introduction",
                                collapsed: true,
                                items: [
                                    {
                                        text: "Halo Flight Controller (Flugsteuerung)",
                                        link: "/halo-introduction",
                                        collapsed: true,
                                        items: [
                                            {text: "Verkabelung", link: "/halo-wiring"},
                                            {text: "Mit ELRS verbinden", link: "/halo-bind"},
                                            {text: "Firmware", link: "/halo-firmware"},
                                        ],
                                    },
                                    {
                                        text: "Halo 4in1 70A ESC",
                                        link: "/halo-esc-introduction",
                                        collapsed: true,
                                        items: [
                                            {text: "Verkabelung", link: "/halo-esc-wiring"},
                                            {text: "Firmware", link: "/halo-esc-firmware"},
                                        ],
                                    },
                                ],
                            },
                            {
                                text: "AIO5",
                                link: "/aio5-introduction",
                                collapsed: true,
                                items: [
                                    {text: "Einbau", link: "/aio5-installation"},
                                    {text: "Mit ELRS verbinden", link: "/aio5-bind"},
                                    {text: "Firmware", link: "/aio5-firmware"},
                                ],
                            },
                            {
                                text: "AIO15",
                                link: "/aio15-introduction",
                                collapsed: true,
                                items: [
                                    {text: "Einbau", link: "/aio15-installation"},
                                    {text: "Mit ELRS verbinden", link: "/aio15-bind"},
                                    {text: "Firmware", link: "/aio15-firmware"},
                                ],
                            },
                        ],
                    },
                    {
                        text: "Camera",
                        items: [
                            {
                                text: "HDZero Kamera Produkte",
                                link: "/camera-summary.md",
                                collapsed: true,
                                items: [
                                    {text: "Nano90 V2 Kamera", link: "/camera-nano90-v2.md"},
                                    {text: "Micro V3 Kamera", link: "/camera-micro-v3.md"},
                                    {text: "Nano V3 Kamera", link: "/camera-nano-v3.md"},
                                    {text: "ECO Kamera", link: "/camera-eco.md"},
                                    {text: "Lux Kamera", link: "/camera-lux.md"},
                                ],
                            },
                            {
                                text: "Auslaufende Kameras",
                                link: "/camera-dis-summary.md",
                                collapsed: true,
                                items: [
                                    {text: "Nano90 Kamera", link: "/camera-nano90.md"},
                                    {text: "Micro V2 Kamera", link: "/camera-micro-v2.md"},
                                    {text: "Nano Kamera", link: "/camera-nano.md"},
                                    {text: "Nano lite Kamera", link: "/camera-nano-lite.md"},
                                    {text: "Nano V2 Kamera", link: "/camera-nano-v2.md"},
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
})
