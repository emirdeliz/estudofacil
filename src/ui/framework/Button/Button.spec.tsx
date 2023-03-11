import { ESThemeOpacity, ESThemeSpace } from '@/theme';
import { render, fireEvent } from 'test/TestUtils';
import { Button } from './Button';

describe('Button component test', () => {
  it('Have button', async () => {
    const { container: buttonNode } = render(<Button />);
    expect(typeof buttonNode.firstChild).toEqual(typeof (<button />));
  });

  it('Have button not clickable', async () => {
    const { container: buttonNode } = render(<Button clickable={false} />);
    expect(buttonNode.firstChild).toHaveStyleRule(
      'opacity',
      String(ESThemeOpacity.Disable)
    );
    expect(buttonNode.firstChild).toHaveStyleRule('cursor', 'not-allowed');
  });

  it('Have button sm', async () => {
    const { container: buttonNode } = render(
      <Button fs-1 pl-1 pr-1 pt-0 pb-0 />
    );
    expect(buttonNode.firstChild).toHaveStyleRule(
      'padding-left',
      ESThemeSpace['Sp-1']
    );
    expect(buttonNode.firstChild).toHaveStyleRule(
      'padding-right',
      ESThemeSpace['Sp-1']
    );
    expect(buttonNode.firstChild).toHaveStyleRule(
      'padding-top',
      ESThemeSpace['Sp-0']
    );
    expect(buttonNode.firstChild).toHaveStyleRule(
      'padding-bottom',
      ESThemeSpace['Sp-0']
    );
  });

  it('Have button click', async () => {
    const click = jest.fn();
    const { container: buttonNode } = render(<Button onClick={click} />);
    fireEvent.click(buttonNode.firstChild as Element);
    fireEvent.click(buttonNode.firstChild as Element);
    fireEvent.click(buttonNode.firstChild as Element);
    expect(click.mock.calls.length).toEqual(3);
  });
});
