<template>
    <form id="form-1"

          action=""
          method="post"
          novalidate="true"
    >

        <div class="section">
            <span>1</span>
            <label for="in-1">Фамилия и имя</label>
            <input type="text" placeholder="Сидоров Александр" id="in-1">
        </div>
        <div class="section">
            <span>2</span>
            <label for="in-2">Электронная почта</label>
            <input type="email" placeholder="Sidorov@yandex.ru " id="in-2">
        </div>
        <div class="section">
            <span>3</span>
            <label for="in-3">Телефон</label>
            <input type="tel" placeholder="+7 (999)-328-14-20" id="in-3">
        </div>
        <div class="section">
            <span>4</span>
            <label for="in-4">Какой деятельностью, не связанной с текущими проектами, вы бы хотели заниматься в рабочее время?</label>

            <textarea  id="in-4"  placeholder="Свой проект по созданию универсальной инфраструктуры строительства" cols="30" rows="10"></textarea>
        </div>
        <input title="Отправить" type="submit">
    </form>
</template>

<script>
export default {
    name:'app',
    data(){
        return{
            msg:'www'
        }
    }
}
</script>
