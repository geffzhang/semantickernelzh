---
sidebar_position: 1
---

# 开始学习如何使用语义内核

- 项目
- 2023/05/23
- 2个参与者

反馈

在几个简单的步骤中，您可以运行C#或Python中的语义内核入门指南。完成指南后，您将知道如何...

- 配置本地机器以运行语义内核
- 运行内核中的提示
- 使用变量使提示动态化
- 创建提示链
- 使用规划器自动创建新链
- 使用嵌入存储和检索内存

如果您是有经验的开发人员，可以跳过指南，直接访问软件包。

- [C#](https://learn.microsoft.com/zh-cn/semantic-kernel/get-started/?tabs=Csharp#tabpanel_1_Csharp)
- [Python](https://learn.microsoft.com/zh-cn/semantic-kernel/get-started/?tabs=Csharp#tabpanel_1_python)

访问`SemanticKernel` Nuget feed的说明在[此处](https://aka.ms/sk/nuget)可用。只需：

Nuget

```Nuget
#r "nuget: Microsoft.SemanticKernel, *-*"
```



## 运行指南的要求

在运行C#指南之前，请确保在本地机器上安装了以下内容。如果您使用Python指南，则只需要`git`和`python`。

- `git`或[GitHub应用程序](https://desktop.github.com/)
- [VSCode](https://code.visualstudio.com/Download)或[Visual Studio](https://visualstudio.microsoft.com/downloads/)
- 通过[Azure OpenAI服务](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?pivots=programming-language-studio)或[OpenAI](https://openai.com/api/)获得OpenAI密钥。
- [.Net 7 SDK](https://dotnet.microsoft.com/download) - 用于C#笔记本指南
- 在VS Code中，[Polyglot Notebook](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-interactive-vscode) - 用于笔记本指南



## 下载并运行指南

要设置指南，请按照以下步骤操作。

 提示

在Jupyter笔记本中提示输入OpenAI或Azure OpenAI密钥。

1. 使用Web浏览器访问GitHub上的[aka.ms/sk/repo](https://aka.ms/sk/repo)。

2. 将repo克隆或分叉到本地机器上。

    备注

   如果您是首次使用GitHub并从未将repo克隆到本地机器上，请查看[此指南](https://docs.github.com/repositories/creating-and-managing-repositories/cloning-a-repository)。

    备注

   如果您是开源新贡献者，请[分叉repo](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)开始您的旅程。

   如果您无法克隆或分叉repo，则可以观看下面的视频。

   <iframe src="https://aka.ms/SK-Local-Setup" frameborder="0" allowfullscreen="true" data-linktype="external" style={{boxSizing: 'inherit', outlineColor: 'inherit', margin: '0px', padding: '0px',border: '0px', width: '534px', height: '300.375px', inset: '0px'}}></iframe>

3. 在VS Code中打开`semantic-kernel/samples/notebooks`文件夹。

4. 根据您喜欢的编程语言选择.Net或Python文件夹。

5. 打开`00-getting-started.ipynb`笔记本。

6. 使用左侧的“播放”按钮激活每个代码片段。

   如果您需要帮助运行`00-getting-started.ipynb`笔记本，请观看下面的视频。

   <iframe src="https://aka.ms/SK-Getting-Started-Notebook" frameborder="0" allowfullscreen="true" data-linktype="external" style={{boxSizing: 'inherit', outlineColor: 'inherit', margin: '0px', padding: '0px',border: '0px', width: '534px', height: '300.375px', inset: '0px'}}></iframe>

7. 重复进行其余笔记本。



## 导航指南

指南旨在按顺序运行，以建立在先前笔记本中学习的概念上。但是，如果您有兴趣学习特定概念，则可以跳转到涵盖该概念的笔记本。以下是可用的指南。

- `00-getting-started.ipynb` – 运行您的第一个提示
- `01-basic-loading-the-kernel.ipynb` – 更改内核的配置
- `02-running-prompts-from-file.ipynb` – 学习如何从文件运行提示
- `03-semantic-function-inline.ipynb` – 直接在代码中配置和运行提示
- `04-context-variables-chat.ipynb` – 使用变量使提示动态化
- `05-using-the-planner.ipynb` – 使用规划器动态创建提示链
- `06-memory-and-embeddings.ipynb` – 使用嵌入存储和检索内存



## 喜欢这个项目吗？

如果您喜欢语义内核，请给该repo一个⭐️星以显示您的支持。

![Starring the repo for SK to show support](https://learn.microsoft.com/zh-cn/semantic-kernel/media/pleasestarrepo.png)



## 继续学习

指南是运行示例代码和学习如何使用语义内核的简单方法。如果您想了解语义内核背后的概念，请继续阅读文档。根据您的经验水平，您可以跳转到最适合您需求的部分。

| 经验水平                                      | 下一步                                                    |
| :---------------------------------------------------- | :----------------------------------------------------------- |
| 刚开始学习AI的初学者 | [学习提示工程](https://learn.microsoft.com/zh-cn/semantic-kernel/prompt-engineering/) |
| 熟悉提示工程的人  | [编排提示链](https://learn.microsoft.com/zh-cn/semantic-kernel/create-chains/) |
| 熟悉链接提示的人             | [存储和检索内存](https://learn.microsoft.com/zh-cn/semantic-kernel/memories/) |
| 想要看到所有内容如何协同工作的人   | [运行示例应用程序](https://learn.microsoft.com/zh-cn/semantic-kernel/samples-and-solutions/) |