import { Input, Form, Button, Space } from "antd";
import { useFormik } from 'formik';

const FormItem = Form.Item;

interface IForm {
  username: string;
  password: string;
}

export default function FormikTest() {
  // TODO: make form work with formik , pass handleSubmit to onSubmit of formik
  // BONUS: adding validation has extra points
  // Resource: https://formik.org/docs/tutorial

  const validate = values => {

    const errors = {};

    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length < 3) {
      errors.username = 'Must be 3 characters or more';
    }
 
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length <3 ) {
      errors.password = 'Must be 3 characters or more';
    }
    return errors;
  };
  
  const formik = useFormik({

    initialValues: {

      username: '',
      password: ''

    },
    validate,

    onSubmit: (values: IForm) => {
      console.log(values);
    },

  });

  return (
    <div>
      <div>Simple Formik With Antd Inputs :: Edit src/pages/formik.tsx</div>
      <hr />
      {/* TODO: use Formik */}
      <form onSubmit={formik.handleSubmit}>
        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        
        <FormItem label="Username" >
          <Input name="username" onChange={formik.handleChange} value={formik.values.username}/>
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        </FormItem>
        
        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        
        <FormItem label="Password" >
          <Input name="password" onChange={formik.handleChange} value={formik.values.password} />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </FormItem>
        
        
        
        <Space>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
          <Button
            onClick={() => {
              // TODO: reset form with formik
              
            }}
          >
            reset
          </Button>
        </Space>
      </form>
    </div>
  );
}
