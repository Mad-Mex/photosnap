import styled from "styled-components"


const TableTitle = styled.h2 `
    margin-bottom: 5.6rem;
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.8rem;
    letter-spacing: 0.417rem;
    text-transform: uppercase;
    text-align: center;
`

const TableFlex = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

const TableContainer = styled.table `
    width: 73.1rem;
    height: 55.2rem;
    margin-bottom: 16rem;
`

const TableRowFirst = styled.div `
    display: flex;
    width: 100%;
    height: 3.9rem;
    border-bottom: 1px solid #000;
`

const TableRow = styled.div `
    display: flex;
    width: 100%;
    height: 6.4rem;
    border-bottom: 1px solid #efefef;
`

const TableHeadFeaturesFirst = styled.div `
    width: 40%;
    height: 3.9rem;
    padding-left: 2.4rem ;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.562rem;
    letter-spacing: 0.2rem;
    text-align: left;
    text-transform: uppercase;
`

const TableHeadPlanFirst = styled.div `
    width: 20%;
    height: 3.9rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.562rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    text-align: center;
`

const TableHeadFeatures = styled.div `
    width: 40%;
    height: 3.9rem;
    padding: 2.4rem 0 2.4rem 2.4rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.562rem;
    letter-spacing: 0.2rem;
    text-align: left;
    text-transform: uppercase;
    vertical-align: middle;
`

const TableHeadPlan = styled.div `
    width: 20%;
    height: 3.9rem;
    margin-top: 2.4rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.562rem;
    letter-spacing: 0.2rem;
    text-align: center;
    text-transform: uppercase;
`


export const TableComparison = () => {

  return (

    <>
        <TableTitle> Compare </TableTitle>

        <TableFlex> 
            <TableContainer>
        
                <TableRowFirst>
                    <TableHeadFeaturesFirst> The Features </TableHeadFeaturesFirst>
                    <TableHeadPlanFirst> Basic </TableHeadPlanFirst>
                    <TableHeadPlanFirst> Pro </TableHeadPlanFirst>
                    <TableHeadPlanFirst> Business </TableHeadPlanFirst>
                </TableRowFirst>

                <TableRow>
                    <TableHeadFeatures> Unlimited Story Posting </TableHeadFeatures>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                </TableRow>

                <TableRow>
                    <TableHeadFeatures> Unlimited Photo Upload </TableHeadFeatures>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                </TableRow>

                <TableRow>
                    <TableHeadFeatures> Embedding Custom Content </TableHeadFeatures>
                    <TableHeadPlan></TableHeadPlan>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                </TableRow>

                <TableRow>
                    <TableHeadFeatures> Customize Metadata </TableHeadFeatures>
                    <TableHeadPlan></TableHeadPlan>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                </TableRow>

                <TableRow>
                    <TableHeadFeatures> Advanced Metrics </TableHeadFeatures>
                    <TableHeadPlan></TableHeadPlan>
                    <TableHeadPlan></TableHeadPlan>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                </TableRow>

                <TableRow>
                    <TableHeadFeatures> Photo Downloads </TableHeadFeatures>
                    <TableHeadPlan></TableHeadPlan>
                    <TableHeadPlan></TableHeadPlan>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                </TableRow>

                <TableRow>
                    <TableHeadFeatures> Search Engine Indexing </TableHeadFeatures>
                    <TableHeadPlan></TableHeadPlan>
                    <TableHeadPlan></TableHeadPlan>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                </TableRow>

                <TableRow>
                    <TableHeadFeatures> Custom Analytics </TableHeadFeatures>
                    <TableHeadPlan></TableHeadPlan>
                    <TableHeadPlan></TableHeadPlan>
                    <TableHeadPlan> <img src="/icons/pricing/check.svg" alt="ckeck" /> </TableHeadPlan>
                </TableRow>
                
            </TableContainer>
        </TableFlex>


    </>
  )
}
