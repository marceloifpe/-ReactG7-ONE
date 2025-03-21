import tags from "./tags.json";
import styled from "styled-components";

const BarTags = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;

  @media (max-width: 768px) {
    margin: 0 1rem;
    gap: 0.5rem;
  }

  @media (max-width: 430px) {
    padding-inline: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    margin: 2rem 0;
  }
`;

const TagTitle = styled.h3`
  color: #d9d9d9;
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-weight: 400;
    white-space: nowrap;
    width: 100%;
  }
`;

const Tag = styled.button`
  font-size: 1.5rem;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 0.625rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }

  @media (max-width: 430px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 430px) {
    gap: 0.5rem;
  }
`;

// eslint-disable-next-line react/prop-types
const Tags = ({ setTag }) => {
  return (
    <BarTags>
      <TagTitle>Busque por tags:</TagTitle>
      <Div>
        {tags.map((tag) => (
          <Tag key={tag.id} onClick={() => setTag(tag.tag)}>
            {tag.titulo}
          </Tag>
        ))}
      </Div>
    </BarTags>
  );
};

export default Tags;
