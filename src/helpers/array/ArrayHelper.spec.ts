import { PaymentCategoryModel } from 'framework/models';
import { PaymentCategoryMock } from 'framework/tests';
import { updateItemInArray } from './ArrayHelper';

describe('framework/helpers/array', () => {
  it('Should have an update array', async () => {
    const arrayUpdated = updateItemInArray<PaymentCategoryModel, 'id', 'name'>({
      array: PaymentCategoryMock,
      testKey: 'id',
      testValue: 17,
      updateKey: 'name',
      updateValue: 'Categoria atualizada'
    });
    expect(arrayUpdated[1].name).toEqual('Categoria atualizada');
  });

  it('Should have an update sub-array', async () => {
    const { subCategories } = PaymentCategoryMock[0]; 
    const arrayUpdated = updateItemInArray<PaymentCategoryModel, 'id', 'name'>({
      array: subCategories,
      testKey: 'id',
      testValue: 128,
      updateKey: 'name',
      updateValue: 'Subcategoria atualizada'
    });
    expect(arrayUpdated[1].name).toEqual('Subcategoria atualizada');
  });
});
