import styled from "styled-components";
import React, { Component } from "react";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  .btn {
    color: #ffffff;
    padding: 0.8rem;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 400;
    display: block;
    width: 100%;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
  }

  .btn:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;
  }

  .cards_item {
    display: flex;
    padding: 1rem;
  }

  @media (min-width: 40rem) {
    .cards_item {
      width: 50%;
    }
  }

  @media (min-width: 56rem) {
    .cards_item {
      width: 20%;
    }
  }

  .card {
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    // overflow: hidden;
  }

  .card_content {
    padding: 1rem;
    background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  }

  .card_title {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
  }

  .card_text {
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    font-weight: 400;
  }
  .made_by {
    font-weight: 400;
    font-size: 13px;
    margin-top: 35px;
    text-align: center;
  }
`;

const Card = ({ data }) => {
  return (
    <CardContainer>
      <div class="main">
        <ul class="cards">
          {data.map((item) => (
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src={item.url} width="100%" height="320px" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">{item.title}</h2>
                  <p class="card_text">{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CardContainer>
  );
};
export default Card;
