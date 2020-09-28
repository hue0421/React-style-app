import React from 'react';
import styled from 'styled-components';

const Main = () => {
  const MainStyle = styled.div`
    margin: 30px 80px;
  `;
  const Section2Style = styled.div`
    font-size: 25px;
    font-weight: 800;
    color: rgb(68, 66, 66);
  `;
  const CardBoxStyle = styled.div`
    margin: 20px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;
  const CardStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: 1px solid rgb(212, 210, 210);
    border-radius: 6px;
    box-shadow: 0 0 3px 0 rgb(172, 170, 170);
  `;
  const CardContentStyle = styled.div`
    display: grid;
    align-items: center;
    font-weight: 600;
    margin: 0 0 0 10px;
  `;
  const Cardimg1Style = styled.div`
    background-image: url(images/card1.jpg);
    height: 70px;
    background-size: 100% 100%;
  `;
  const Cardimg2Style = styled.div`
    background-image: url(images/card2.jpg);
    height: 70px;
    background-size: 100% 100%;
  `;
  const Cardimg3Style = styled.div`
    background-image: url(images/card3.jpg);
    height: 70px;
    background-size: 100% 100%;
  `;
  const Cardimg4Style = styled.div`
    background-image: url(images/card4.jpg);
    height: 70px;
    background-size: 100% 100%;
  `;
  const Ad1Style = styled.div`
    border-radius: 20px;
    margin: 40px 0;
    background-image: url(images/ad1.jpg);
    height: 350px;
    background-size: 100% 100%;
  `;
  const ChooBoxStyle = styled.div`
    margin: 20px 0 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;
  const Chooimg1Style = styled.div`
    background-image: url(images/choo1.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const Chooimg2Style = styled.div`
    background-image: url(images/choo2.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const Chooimg3Style = styled.div`
    background-image: url(images/choo3.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const Chooimg4Style = styled.div`
    background-image: url(images/choo4.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const Chooimg5Style = styled.div`
    background-image: url(images/choo5.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const Ad2Style = styled.div`
    margin: 20px 0;
    background-image: url(../images/ad2.png);
    height: 300px;
    background-size: 100% 100%;
  `;
  const HomeBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    margin: 20px 0;
  `;
  const Homeimg1 = styled.div`
    background-image: url(images/home1.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Homeimg2 = styled.div`
    background-image: url(images/home2.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Homeimg3 = styled.div`
    background-image: url(images/home3.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Homeimg4 = styled.div`
    background-image: url(images/home4.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Homeimg5 = styled.div`
    background-image: url(images/home5.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Homeimg6 = styled.div`
    background-image: url(images/home6.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Homeimg7 = styled.div`
    background-image: url(images/home7.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Homeimg8 = styled.div`
    background-image: url(images/home8.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Info1 = styled.div`
    margin: 5px 0;
    font-size: 13px;
    color: gray;
  `;
  const Info2 = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: rgb(61, 60, 60);
  `;

  const Star = styled.span`
    font-size: 12px;
    color: rgb(30, 119, 115);
    font-weight: 800;
    margin-right: 4px;
  `;
  const Count_Type = styled.span`
    font-size: 12px;
    margin-right: 4px;
  `;
  return (
    <MainStyle>
      <section>
        <Section2Style>에어비앤비 둘러보기</Section2Style>
        <CardBoxStyle>
          <CardStyle>
            <Cardimg1Style />
            <CardContentStyle>숙소 및 부티크 호텔</CardContentStyle>
          </CardStyle>
          <CardStyle>
            <Cardimg2Style />
            <CardContentStyle>트립</CardContentStyle>
          </CardStyle>
          <CardStyle>
            <Cardimg3Style />
            <CardContentStyle>어드벤처</CardContentStyle>
          </CardStyle>
          <CardStyle>
            <Cardimg4Style />
            <CardContentStyle>레스토랑</CardContentStyle>
          </CardStyle>
        </CardBoxStyle>
      </section>
      <seciton>
        <Ad1Style></Ad1Style>
      </seciton>
      <seciton>
        <Section2Style>추천여행지</Section2Style>
        <ChooBoxStyle>
          <Chooimg1Style />
          <Chooimg2Style />
          <Chooimg3Style />
          <Chooimg4Style />
          <Chooimg5Style />
        </ChooBoxStyle>
      </seciton>
      <section>
        <Section2Style>에어비엔비 플러스를 만나보세요!</Section2Style>
        <div>퀄리티와 인테리어 디자인이 검증된 숙소</div>
        <Ad2Style></Ad2Style>
      </section>
      <section>
        <Section2Style>전 세계 숙소</Section2Style>
        <HomeBoxStyle>
          <div className="Home">
            <Homeimg1 />
            <div className="Homeinfo">
              <Info1>오두막 · BALIAN BEACH, BALI</Info1>
              <Info2>BALIAN TREEHOUSE w beautiful pool</Info2>
              <div className="Info3">
                <Star>★★★★★</Star>
                <Count_Type>185</Count_Type>
                <Count_Type>슈퍼호스트</Count_Type>
              </div>
            </div>
          </div>
          <div className="Home">
            <Homeimg2 />
            <div className="Homeinfo">
              <Info1>키클라데스 주택 · 이아(OIA)</Info1>
              <Info2>Unique Architecture Cave House</Info2>
              <div className="Info3">
                <Star>★★★★★</Star>
                <Count_Type>188</Count_Type>
                <Count_Type>슈퍼호스트</Count_Type>
              </div>
            </div>
          </div>
          <div className="Home">
            <Homeimg3 />
            <div className="Homeinfo">
              <Info1>성 · 트웬티나인 팜스(TWENTYNINE PALMS)</Info1>
              <Info2>Tile House</Info2>
              <div className="Info3">
                <Star>★★★★★</Star>
                <Count_Type>367</Count_Type>
                <Count_Type>슈퍼호스트</Count_Type>
              </div>
            </div>
          </div>
          <div className="Home">
            <Homeimg4 />
            <div className="Homeinfo">
              <Info1>검증됨 · 케이프타운</Info1>
              <Info2>
                Modern, Chic Penthouse with Mountain, City & Sea Views
              </Info2>
              <div className="Info3">
                <Star>★★★★★</Star>
                <Count_Type>177</Count_Type>
                <Count_Type>슈퍼호스트</Count_Type>
              </div>
            </div>
          </div>
          <div className="Home">
            <Homeimg5 />
            <div className="Homeinfo">
              <Info1>아파트 전체 · 마드리드(MADRID)</Info1>
              <Info2>솔광장에 위치한 개인 스튜디오</Info2>
              <div className="Info3">
                <Star>★★★★★</Star>
                <Count_Type>459</Count_Type>
                <Count_Type>슈퍼호스트</Count_Type>
              </div>
            </div>
          </div>
          <div className="Home">
            <Homeimg6 />
            <div className="Homeinfo">
              <Info1>집 전체 · HUMAC</Info1>
              <Info2>Vacation house in etno-eco village Humac</Info2>
              <div className="Info3">
                <Star>★★★★★</Star>
                <Count_Type>119</Count_Type>
                <Count_Type>슈퍼호스트</Count_Type>
              </div>
            </div>
          </div>
          <div className="Home">
            <Homeimg7 />
            <div className="Homeinfo">
              <Info1>개인실 · 마라케시</Info1>
              <Info2>The Cozy Palace</Info2>
              <div className="Info3">
                <Star>★★★★★</Star>
                <Count_Type>559</Count_Type>
                <Count_Type>슈퍼호스트</Count_Type>
              </div>
            </div>
          </div>
          <div className="Home">
            <Homeimg8 />
            <div className="Homeinfo">
              <Info1>게스트용 별채 전체 · 로스앤젤레스</Info1>
              <Info2>Private Pool House with Amazing Views!</Info2>
              <div className="Info3">
                <Star>★★★★★</Star>
                <Count_Type>170</Count_Type>
                <Count_Type>슈퍼호스트</Count_Type>
              </div>
            </div>
          </div>
        </HomeBoxStyle>
      </section>
    </MainStyle>
  );
};

export default Main;
