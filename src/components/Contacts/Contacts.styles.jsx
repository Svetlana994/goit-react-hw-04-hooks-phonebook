import styled from '@emotion/styled/macro';

export const ContactItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;
list-style: none;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    color: #3561d0;
}
`;

export const BtnDelete = styled.button`
display: inline-flex;
align-items: center;
padding: 5px;
border-color: transparent;
border-radius: 5px;
background-color: #c7cace;
text-transform: uppercase;
cursor: pointer;

&:hover {
    background-color: #3561d0;
    color: #fff;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`; 

export const BtnText = styled.span`
margin-right: 5px;
`;

export const NumberText = styled.span`
margin-right: 30px;
margin-left: 10px
`;