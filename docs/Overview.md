---
sidebar_position: 1
---

# 什么是语义内核？

- 项目
- 2023/05/23
- 3个参与者

反馈

Semantic Kernel是一个轻量级的开源编排SDK，可以让您轻松地将AI提示与传统编程语言（如C#和Python）混合使用。

## 语义内核简化了AI应用程序的开发

Semantic Kernel被设计为允许开发人员灵活地将AI集成到其现有应用程序中。为此，Semantic Kernel提供了一组抽象，使创建和管理提示、本地函数、内存和连接器变得容易。然后，您可以使用Semantic Kernel管道来编排这些组件，以完成用户的请求或自动化操作。

由于Semantic Kernel提供的抽象，您可以使用它来编排来自任何提供商的AI。例如，您可以使用Semantic Kernel来编排来自OpenAI、Azure甚至Hugging Face的AI。

作为开发人员，您可以单独使用这些部件。例如，如果您只需要OpenAI和Azure OpenAI服务的抽象，您可以使用SDK运行预配置的提示。

### 使用语义内核编排AI

然而，Semantic Kernel的真正强大之处在于它将这些组件组合在一起的能力。通过在Semantic Kernel中同时使用多个AI模型、本地函数和内存，您可以创建使用AI自动化复杂任务的复杂管道。

例如，使用Semantic Kernel，您可以创建一个管道，帮助用户向其营销团队发送电子邮件。使用内存，您可以检索有关项目的信息，然后使用规划器自动生成剩余步骤（例如，使用Microsoft Graph数据将用户的要求与实际情况联系起来，使用GPT-4生成响应并发送电子邮件）。最后，您可以在自定义应用程序中向用户显示成功消息。

## 语义内核是开源的

您可能熟悉Microsoft 365 Copilot System，这是Microsoft用于在GPT-4之上提供新的Copilot体验的步骤。该SDK将这些模式正式化，以便构建LLM驱动的应用程序更加容易。为了确保所有开发人员都可以利用我们的经验，我们已经将Semantic Kernel作为开源项目发布在GitHub上。

鉴于LLM AI的新突破每天都在发生，您应该期望这个SDK会不断发展。我们很高兴看到您使用Semantic Kernel构建的内容，并期待您的反馈和贡献，以便我们可以共同在SDK中建立最佳实践。

### 贡献到语义内核

我们欢迎来自Semantic Kernel社区的贡献和建议！参与讨论GitHub存储库中的讨论是最简单的方法之一。欢迎报告和修复错误！

对于新功能、组件或扩展，请在发送PR之前打开一个问题并与我们讨论。这将有助于避免拒绝，因为它将允许我们讨论对更大生态系统的影响。

## 开始使用语义内核SDK

现在您已经知道了什么是语义内核，请按照“入门”链接尝试它。在几分钟内，您可以创建提示并将它们与现成的插件和本地代码链接在一起。之后不久，您可以使用嵌入式内存为您的应用程序提供记忆，并从外部API中召唤更多的能量。