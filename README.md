# ng-cpf-cnpj

AngularJS directive to validate CPF/CNPJ numbers, using [cpf_cnpj.js](https://github.com/fnando/cpf_cnpj.js).

## How to install

```bower install ng-cpf-cnpj --save```

And add to your index.html

```html
<script src="bower_components/cpf_cnpj/build/cpf.js"></script>
<script src="bower_components/cpf_cnpj/build/cnpj.js"></script>
<script src="bower_components/ng-cpf-cnpj/lib/ngCpfCnpj.js"></script>
```

## How to use

Just add ```ng-cpf``` or ```ng-cnpj``` to any ```<input/>```. You can also use ```ui-mask```, from [ui-utils](https://github.com/angular-ui/ui-utils), to restrict the format:

```html
<form name="myForm">

  <input name="cpf" ng-model="cpf" ng-cpf ui-mask="999.999.999-99" />
  myForm.cpf.$valid: {{ myForm.cpf.$valid }}

  <input name="cnpj" ng-model="cnpj" ng-cnpj ui-mask="99.999.999/9999-99" />
  myForm.cnpj.$valid: {{ myForm.cnpj.$valid }}

</form>
```