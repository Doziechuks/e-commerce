import { PaystackButton } from "react-paystack";

const HandlePayment = ({ price }) => {
  const cash = price * 100;
  const toNaira = cash * 700;
  const publicKey = `${process.env.REACT_APP_PAY_STACK_publicKey}`;

  const handleSuccess = (success) => {
    console.log(success);
    alert('Payment successful');
  }
  const handleClosedSession = () => {
    console.log('session closed');
    alert('You are about to close this payment session!!');
  }

  return (
    <PaystackButton
      name="Uska clothing"
      text="Pay Here"
      email="doziechuks1010@gmail.com"
      reference={new Date().getTime().toString()}
      description={`Your total is $${price}`}
      amount={toNaira}
      onSuccess={handleSuccess}
      onClose={handleClosedSession}
      publicKey={publicKey}
    />
  );
}
 
export default HandlePayment;