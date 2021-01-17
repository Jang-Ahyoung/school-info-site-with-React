import React,{memo} from 'react';
import Header from '../header/header';
import styles from './card.module.css';

const DeliveryCard = memo((props) => {
  const delivery=[
    { id : 1, name : '네네 치킨', tel :' 055-356-7077', time : '매일 12:30~24:00', 
    menu1:'후라이드 ----------- 15,000원',menu2:'양념치킨 ----------- 16,000원',menu3:"스노윙 치킨 -------- 17,000원",option:'* 2마리 이상 배달가능',
    url:'//store.naver.com/restaurants/detail?id=36406419'},
    { id : 2, name : '처갓집', tel : '055-354-1628' ,time :'매일 09:00~24:00',
     menu1:'후라이드 ----------- 16,000원',menu2:'순살양념 ----------- 17,000원',menu3:'슈프림양념치킨 --- 17,000원',option:'* 배달비 1000원',
    url:'//store.naver.com/restaurants/detail?id=35637577'},
    { id : 3, name : '장수왕족발', tel : '055-352-7015',time :'매일 11:00~23:00',
    menu1:'족발 소 ----------- 25,000원',menu2:'족발 대 ----------- 30,000원',menu3:'족발 특대 -------- 40,000원',option:'* 공기밥 1000원',
    url:'//store.naver.com/restaurants/detail?id=1318522214'},
    { id : 4, name : 'BHC', tel : '055-352-0969',time :'매일 12:00 - 24:00',
    menu1:'뿌링클 ----------- 17,000원',menu2:'뿌링맵소킹 ----------- 17,000원',menu3:'핫후라이드 -------- 16,000원',option:'* 배달비 10,000원',
    url:'//store.naver.com/restaurants/detail?id=36029666'}
  ];

  const move = (url)=>{
    window.location.href=`http://${url}`;
  }

  return(
  <>
    <Header/>
      <section className={styles.body}>
        {delivery.map((delivery)=>
          <section className={styles.card}>
            <h3 className={styles.title}>{delivery.name}</h3>
            <h4 className={styles.tel}>{delivery.tel}</h4>
            <p className={styles.content}>{delivery.time}<br/><br/>{delivery.menu1}<br/>{delivery.menu2}<br/>{delivery.menu3}<br/><br/>{delivery.option}</p>     
            <p></p>
            <a className={styles.link} href={delivery.url}>Menu Link</a>
        </section>
      )}
      </section>
      </>  
  )}
);

export default DeliveryCard;

