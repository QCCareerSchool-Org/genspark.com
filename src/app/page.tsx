import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { ReactNode } from 'react';

import DavidGriller from '../images/david-griller-managing-partner.svg';
import Left from '../images/home-left.jpg';
import Right from '../images/home-right.jpg';

import style from './page.module.css';

export default function Home(): ReactNode {
  return (
    <div className="wrapper">
      <div className={style.imageWrapper}>
        <Image src={Left} width={490} height={392} priority placeholder="blur" className={`${style.homepageImage} ${style.leftImage}`} alt="" />
        <Image src={Right} width={490} height={392} priority placeholder="blur" className={`${style.homepageImage} ${style.rightImage}`} alt="" />
      </div>
      <div className={style.title}>
        <Image className={style.title} src={DavidGriller as StaticImageData} width={280} height={56} priority alt="David Griller, Managing Partner" />
      </div>
      <ul className={style.contactList}>
        <li><strong>T:</strong> 1-613-716-5271</li>
        <li><strong>F:</strong> 1-613-749-9551</li>
        <li><strong>E:</strong> &#x67;&#x72;&#x69;&#x6C;&#x6C;&#x65;&#x72;&#x40;&#x67;&#x65;&#x6E;&#x73;&#x70;&#x61;&#x72;&#x6B;&#x2E;&#x63;&#x6F;&#x6D;</li>
      </ul>
    </div>
  );
}
