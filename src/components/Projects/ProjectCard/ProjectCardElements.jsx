import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 350px;        /* 🔥 important for row */
  display: flex;
  flex-direction: column;  /* always column */
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background:transparent;

  @media (min-width: 768px) {
    max-width: 45%;
  }

  @media (min-width: 992px) {
    max-width: 30%;
  }
`;

export const CardLeft = styled.div`
  width: 100%;
  
  img {
    width: 1000%;        /* 🔥 full width */
    height: 150px;      /* fixed height */
     /* image stretch नहोस् */
    border-radius: 5px;
     box-shadow: 0 4px 10px rgb(0, 0, 0);

      transition: 0.3s ease;  /* smooth */
  }
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #000000; /* default text */

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #000000; /* brighter title */
  }

  p {
    font-weight: 400;
    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: #01060b; /* soft readable text */
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }

  .stackTitle {
    color: #000000;
  }

  .tags {
    color: #000000;
  }
    
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  .stackTitle {
    font-weight: 500;
    margin-right: 10px;
    font-size: 17px;
  }

  .tags {
    font-size: 15px;
    font-weight: 400;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;
