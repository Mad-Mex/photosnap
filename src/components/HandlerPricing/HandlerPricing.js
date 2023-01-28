import { useState } from "react"
import styled from "styled-components"

const Handler= styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25.5rem;
    height: 3.2rem;  
    margin: 0 auto 4.8rem;
`

const HandlerText = styled.p `
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;
    color: #000;
`

const HandlerText2 = styled.p `
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;
    color: #000;
    opacity: 50%;
`

const HandlerContainer = styled.div `
    display: flex;
    align-items: center;
    width: 6.4rem;
    height: 3.2rem;
    margin: 0 3.2rem;
    background-color: #DFDFDF;
    border-radius: 1.6rem;
    cursor: pointer;
`

const HandlerSelector = styled.div `
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 0.4rem;
    background-color: #000;
    border-radius: 1.6rem;
`

const PricingContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 111rem;
    height: 47rem;
    margin: 0 11.5% 16rem;
`

const CardPlan = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35rem;
    height: 40.7rem;
    padding: 0 4rem;
    background-color: #F5F5F5;
`

const CardPlanRecommended = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35rem;
    height: 47rem;
    padding: 0 4rem;
    background-color: #000;
    color: #fff;
`

const PlanType = styled.h2 `
    margin-top: 5.6rem;
    margin-bottom: 1.8rem;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.5rem;
`

const PlanTypeRecommended = styled.h2 `
    margin-top: 8.8rem;
    margin-bottom: 1.8rem;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.5rem;
`

const PlanDescription = styled.p `
    margin-bottom: 4rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.5rem;
    text-align: center;
    opacity: 60%;
`


const PlanCost = styled.p `
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.8rem;
    letter-spacing: 0.417rem;
`

const PlanSubscription = styled.p `
    margin-bottom: 3.6rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.5rem;
    opacity: 60%;
`

const PlanBtn = styled.button `
    width: 27rem;
    height: 4rem;
    background-color: #000;
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.562rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;

    :hover {
        background-color: #dfdfdf;
        color: #000;
    }
`

const PlanBtnRecommended = styled.button `
    width: 27rem;
    height: 4rem;
    background-color: #fff;
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.562rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;

    :hover {
        background-color: #dfdfdf;
        color: #000;
    }
`

const PlanRecommendedStripe = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.6rem;
    background: linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);;
`


export const HandlerPricing = () => {
  
  const [toggle, setToggle] = useState(false)
  
  const handlerContainerToggle = {
    backgroundColor: "#000"
  } 

  const handlerSelectorToggle = {
    width: "2.4rem",
    height: "2.4rem",
    marginLeft: "3.6rem",
    backgroundColor: "#fff",
    borderRadius: "1.6rem"
  }

  const handlerTextToggle = {
    opacity: "50%"
  }

  const handlerTextToggle2 = {
    opacity: "100%"
  }

  return (

    <>

        <Handler>
            <HandlerText style={ toggle ? handlerTextToggle : null }> Monthly </HandlerText>
            <HandlerContainer 
            onClick={()=> setToggle(!toggle)} 
            style={ toggle ? handlerContainerToggle : null  }
            >
                <HandlerSelector style={ toggle ? handlerSelectorToggle : null }></HandlerSelector>
            </HandlerContainer>
            <HandlerText2 style={ toggle ? handlerTextToggle2 : null } > Yearly </HandlerText2>
        </Handler>

        <PricingContainer>

            <CardPlan>
                <PlanType> Basic </PlanType>
                <PlanDescription> Includes basic usage of our platform. Recommended for new and aspiring photographers. </PlanDescription>
                <PlanCost> ${ !toggle ? "19.00" : "190.00" } </PlanCost>
                <PlanSubscription> per { !toggle ? "month" : "year" } </PlanSubscription>
                <PlanBtn> Pick plan </PlanBtn>
            </CardPlan>


            <CardPlanRecommended>
                <PlanTypeRecommended> Pro </PlanTypeRecommended>
                <PlanDescription> More advanced features available. Recommended for photography veterans and professionals. </PlanDescription>
                <PlanCost> ${ !toggle ? "39.00" : "390.00" } </PlanCost>
                <PlanSubscription> per { !toggle ? "month" : "year" } </PlanSubscription>
                <PlanBtnRecommended> Pick plan </PlanBtnRecommended>
                <PlanRecommendedStripe></PlanRecommendedStripe>
            </CardPlanRecommended>

            
             <CardPlan>
                <PlanType> Business </PlanType>
                <PlanDescription> Additional features available such as more detailed metrics. Recommended for business owners. </PlanDescription>
                <PlanCost> ${ !toggle ? "99.00" : "990.00" } </PlanCost>
                <PlanSubscription> per { !toggle ? "month" : "year" } </PlanSubscription>
                <PlanBtn> Pick plan </PlanBtn>
            </CardPlan>
        </PricingContainer>

    </> 
    
  )
}
