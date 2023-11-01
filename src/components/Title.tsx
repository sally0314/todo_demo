// import styled from "@emotion/styled";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
//
// const Label = styled.h1`
//   margin-top: 0;
//   margin-left: auto;
//   margin-right: auto;
// `;

interface Props {
    readonly label: string
}

export const Title = ({label}: Props) => {
    return (
        <div className={'container-wrap flex justify-center align-middle'}>
            <h1 className={'mt-0 mx-auto'}>{label}</h1>
        </div>
    );
};
