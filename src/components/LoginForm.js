import { Card,Form,Input,Button } from "./form";



export default function LoginForm(){
return (<Card>
    <Form>
    <Input type="email"/>
    <Input type="password"/>
    <Button>Login</Button>
    </Form>
</Card>);
}