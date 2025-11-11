import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Desarrollo...',
    Svg: require('@site/static/img/index/icon1.svg').default,
    description: (
      <>
        Desarrollar software es mi pasión. Me encanta crear soluciones prácticas y divertidas que simplifiquen tareas y mejoren la experiencia de los usuarios.
      </>
    ),
  },
  {
    title: 'Documentación...',
    Svg: require('@site/static/img/index/icon2.svg').default,
    description: (
      <>
        Para mí, documentar es tan importante como el propio desarrollo. Me aseguro de dejar todo claro y sencillo para que cualquiera pueda entender y seguir mis proyectos sin problema.
      </>
    ),
  },
  {
    title: 'Investigación...',
    Svg: require('@site/static/img/index/icon3.svg').default,
    description: (
      <>
        Investigar me permite explorar nuevas ideas y desafiar mi curiosidad. Siempre estoy buscando aprender algo nuevo y encontrar maneras diferentes de hacer las cosas.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p className={styles.featureP}>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
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
