import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
    position: relative;
    padding: 7.5rem 0 3rem;
    text-align: center;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        padding: 5.5rem 0 3rem;
    }
`;

export const Content = styled("p")`
    padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
    max-width: 570px;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
    }
`;


export const SliderWrapper = styled.div`
    width: 100%;
    max-width: 500px;  // Adjust width as needed
    margin: 0 auto;
    text-align: center;
`;

export const IconTextWrapper = styled.div`
    display: flex;
    flex-direction: column;  // Stack icon above text
    align-items: center;     // Center horizontally
    justify-content: center; // Center vertically
    text-align: center;
    gap: 10px;              // Add space between icon & text

    img {
        display: block;        // Ensure it's treated as a block element
        margin: 0 auto;        // Center horizontally
    }

    p {
        font-size: 16px;
        color: #333;
        margin: 0;
        padding: 0;
        text-align: center;
    }
`;
