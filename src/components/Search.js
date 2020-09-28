import React from 'react';
import styled from 'styled-components';

const Search = () => {
  const SearchStyle = styled.div`
    width: 430px;
    height: 500px;
    display: inline-block;
    background-color: white;
    position: relative;
    top: 10px;
    left: 50px;
    border-radius: 6px;
    padding: 20px 30px;
    box-shadow: 0 2px 2px 0 rgb(214, 214, 214);
  `;

  const SearchTitleStyle = styled.div`
    padding: 10px 0px;
    font-size: 30px;
    font-weight: 800;
    color: rgb(75, 74, 74);
  `;

  const SearchSubTitleStyle = styled.td`
    padding: 10px 0;
    font-size: 12px;
    font-weight: 600;
  `;

  const SearchInputStyle = styled.input`
    height: 45px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;
  const SearchSelectStyle = styled.select`
    height: 45px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;
  const SearchButtonBoxStyle = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: end;
    padding: 20px 0px; /* 세로px 가로px */
  `;
  const SearchButtonStyle = styled.button`
    background-color: #ff5a5f;
    color: white;
    width: 70px;
    height: 45px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
  `;

  return (
    <SearchStyle>
      <SearchTitleStyle>
        특색 있는 숙소와 즐길
        <br /> 거리를 예약하세요.
      </SearchTitleStyle>
      <table style={{ width: '100%' }}>
        <tr>
          <SearchSubTitleStyle colSpan="2">목적지</SearchSubTitleStyle>
        </tr>
        <tr>
          <SearchSubTitleStyle colSpan="2">
            <SearchInputStyle type="text" placeholder=" 모든위치" />
          </SearchSubTitleStyle>
        </tr>
        <tr>
          <SearchSubTitleStyle>체크인</SearchSubTitleStyle>
          <SearchSubTitleStyle>체크아웃</SearchSubTitleStyle>
        </tr>
        <tr>
          <td>
            <SearchInputStyle type="date" />
          </td>
          <td>
            <SearchInputStyle type="date" />
          </td>
        </tr>
        <tr>
          <SearchSubTitleStyle colspan="2">인원</SearchSubTitleStyle>
        </tr>
        <tr>
          <td colspan="2">
            <SearchSelectStyle>
              <option>인원</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </SearchSelectStyle>
          </td>
        </tr>
      </table>
      <SearchButtonBoxStyle>
        <SearchButtonStyle>검색</SearchButtonStyle>
      </SearchButtonBoxStyle>
    </SearchStyle>
  );
};

export default Search;
