# VTX 固件更新指南

## HDZero VTX Programmer

强烈建议使用 [HDZero 编程器](https://item.taobao.com/item.htm?id=923351151370) 更新 VTX。目前仅支持 Windows 系统。

1. 从 [HDZero Download](https://www.alipan.com/s/WdoCPa2odz5) 下载HDZeroProgrammer.zip.
2. 从 zip 文件中提取 HDZeroProgrammer.exe 到 C:\HDZero

## 使用 HDZero 编程器更新 VTX 固件

启动 C:\HDZero\ HDZeroProgrammer.exe。所有符合固件更新条件的兼容 HDZero VTX 型号将自动出现在下方列表中。

<img src="/media/image25.png" id="image22">

1. 选择要更新的 VTX 类型
2. “加载在线固件”将从 GitHub 获取固件，并选择要使用的固件，或者
3. “加载本地固件”指定本地HDZERO_TX.bin ，
4. “ Flash VTX ”开始更新过程。

<iframe style="width: 100%; height: 500px" src="https://player.bilibili.com/player.html?isOutside=true&aid=115161025224094&bvid=BV1ZyYVzvEED&cid=32217500209&p=1&muted=false&poster=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 下载 VTX 固件

如果您无法访问 GitHub 的页面，则需要手动下载 VTX 固件并执行本地刷新过程。

[HDZero Download](https://www.alipan.com/s/WdoCPa2odz5) VTX 固件下载。修订号格式为 HDZEROVTX_RevYYYYMMDD.zip，其中“YYYYMMDD”表示其发布日期。

<img src="/media/image26.png" id="image23">

HDZEROVTX_RevYYYYMMDD.zip 文件包含以下所有兼容 HDZero VTX 和 AIO 型号的固件。每个 ZIP 压缩包内都有一个HDZERO_TX.bin文件，其中包含该 VTX 型号的具体固件。

<img src="/media/image27.png" id="image24">

## 使用HDZero Goggle 或 HDZero VRX4更新 VTX 固件

### 使用 HDZero Goggle更新 VTX 固件的步骤

HDZero 眼镜可以通过其固件端口将固件刷入 HDZero 视频发射器。步骤如下：

1. HDZERO_TX.bin复制到 FAT32 格式的 SD 卡根目录
2. 打开眼镜
3. 使用附带的编程线连接 VTX 和 HDZero 眼镜
4. 进入主菜单 |固件|更新VTX，显示屏将显示闪烁过程的状态
5. 断开 VTX
6. 此 VTX 现已刷入最新固件

<iframe style="width: 100%; height: 500px" src="https://player.bilibili.com/player.html?isOutside=true&aid=115161058775192&bvid=BV1omYVzYECA&cid=32217630986&p=1&muted=false&poster=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

### 使用 HDZero VRX4更新 VTX 固件的步骤

1. 格式化 SD 卡（选择 FAT32 和分配单元大小为 4096 字节）；
2. 如果 VRX 处于打开状态，请将其关闭；
3. 解压HDZERO_TX.bin 从相应的 VTX zip 文件复制到 SD 卡上，然后将 SD 插入 VRX 模块；
4. 将电缆与模块和 VTX 连接起来；
5. 打开VRX模块电源；
6. 如果出现“等待连接 VTX…”或“检查电缆…”，请确保（4）已固定；
7. 如果“固件更新失败”，请重复步骤（1）；
8. 如果“固件更新成功”，则 VTX 已更新；
9. HDZERO_TX.bin文件会自动从 SD 卡中删除。

::: tip
注意：在 SD 卡根目录下放置一个名为“DONOTREMOVE.txt”的空文件，可以防止HDZERO_TX.bin被删除。此功能在更新多台VTX时非常有用。
:::

## 解锁射频功率限制

HDZero Freestyle V1/V2 图传符合 FCC 47 CFR 97.215(c) 标准。出厂时功率限制为 25mW/200mW，但如果您持有所需的业余无线电执照，则最高可输出 900mW。请从图传固件页面下载解锁Freestyle Max固件。 以实现更高的 RF 输出模式。

步骤如下：

1. 下载固件 [Unlock_FreestyleVTX.zip](https://www.alipan.com/s/WdoCPa2odz5)。
2. 将其解压到SD卡的根目录下。
3. 将此固件刷入 VTX。
4. 使用主电池电量充足，完成后蓝色LED灯会闪烁3次。此步骤解锁VTX。
5. 关闭 VTX。
6. 将普通 VTX 固件解压到 SD 卡的根目录。
7. 将此固件刷入 VTX。
8. 现在将提供更高的 RF 输出选项。

::: tip
备注：

1. 严格按照上述步骤操作。请勿跳过步骤 4。
2. 一旦VTX 解锁，当有更新的固件可用时就无需再次解锁。
   :::

## 解锁低频段

VTX 低频段选项需要解锁后才能使用。解锁前，请确保您所在的地区允许使用低频段。

步骤如下：

1. 请从图传固件页面下载解锁Lowband固件 [Unlock_Lowband](https://www.alipan.com/s/WdoCPa2odz5)。
2. 解压缩并将其作为固件更新刷入您的 VTX。
3. 使用主电池供电打开 VTX 。蓝色 LED 应闪烁 5 次然后熄灭，表示解锁已完成。
4. 将最新版本的固件刷入您的图传 (VTX)。当您在图传菜单中切换频道时，您将看到从 L1 到 L8 的新增频道。

::: tip
注意：请严格按照上述步骤操作。请勿跳过步骤3 。
:::
