import React from "react";
import styled from "styled-components";

const ModalDiv = styled.div`
  width: 15%;
  height: 50%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  background-color: #76be74;
  border-radius: 10px;
`;

const DivInputs = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 90px;
  align-items: flex-start;
  justify-content: center;
`;
const DivLabelInput = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const LabelText = styled.label`
  font-size: 15px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivToda = styled.div`
  display: none;
`;

function ModalSelection() {
  return (
    <DivToda>
      <ModalDiv>
        <DivInputs>
          <DivLabelInput>
            <LabelText>Ofertas em Aberto</LabelText>
            <input type="checkbox" />
          </DivLabelInput>
          <DivLabelInput>
            <LabelText>Ofertas Atuais</LabelText>
            <input type="checkbox" />
          </DivLabelInput>

          <DivLabelInput>
            <LabelText>Candidaturas</LabelText>
            <input type="checkbox" />
          </DivLabelInput>
        </DivInputs>
      </ModalDiv>
    </DivToda>
  );
}

export default ModalSelection;
