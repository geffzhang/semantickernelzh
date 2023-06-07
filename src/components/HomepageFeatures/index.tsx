import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '什么是语义内核？',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Semantic Kernel是一个轻量级的开源编排SDK，可以让您轻松地将AI提示与传统编程语言（如C#和Python）混合使用。
      </>
    ),
  },
  {
    title: '语义内核简化了 AI 应用程序的开发',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        语义内核经过精心设计，允许开发人员灵活地将AI集成到他们现有的应用程序中。为此，语义内核提供了一组抽象，可以轻松创建和管理提示、本机函数、内存和连接器。然后，可以使用语义内核管道编排这些组件，以完成用户的请求或自动执行操作。
      </>
    ),
  },
  {
    title: '使用语义内核编排 AI',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        然而，语义内核的真正力量来自它将这些组件组合在一起的能力。通过在语义内核中同时使用多个 AI 模型、本机函数和内存，可以创建使用 AI 自动执行复杂任务的复杂管道。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
