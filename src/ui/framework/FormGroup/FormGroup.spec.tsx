import { render } from 'test/TestUtils';
import { Input } from '../Input/Input';
import { FormGroup } from './FormGroup';

describe('FormGroup component test', () => {
  it('Have FormGroup', async () => {
    const { baseElement: FormGroupNode } = render(<FormGroup>H</FormGroup>);
    expect(typeof FormGroupNode).toEqual(typeof (<FormGroup>H</FormGroup>));
  });

  it('Have FormGroup with input and label', async () => {
    const { baseElement: formGroupNode } = render(
      <FormGroup label="Name">
        <Input value="Peter" />
      </FormGroup>
    );
    const labels = formGroupNode.querySelectorAll('span');
    expect(labels[0]?.innerHTML).toEqual('Name');
    expect(formGroupNode.querySelector('input')?.value).toEqual('Peter');
  });

  it('Have FormGroup with optional field', async () => {
    const { baseElement: formGroupNode } = render(
      <FormGroup label="Age" optional>
        <Input.Number value={33} />
      </FormGroup>
    );
    const labels = formGroupNode.querySelectorAll('span');
    expect(labels[0]?.innerHTML).toEqual('Age');
    expect(labels[1]?.innerHTML).toEqual('optional');
    expect(formGroupNode.querySelector('input')?.value).toEqual('33');
  });
});
