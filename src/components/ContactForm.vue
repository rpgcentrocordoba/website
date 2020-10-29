<template>
  <div class>
    <h4>Consulta</h4>
    <div class="widget footer-widgets tag-widget">
      <form role="form" id="contactform">
        <div class="field">
          <label class="label is-hidden">Nombre</label>
          <div class="control">
            <input class="input" type="text" id="contactname" placeholder="Nombre" />
          </div>
        </div>
        <div class="field">
          <label class="label is-hidden">Email</label>
          <div class="control">
            <input class="input" type="text" id="email" placeholder="Correo" />
          </div>
        </div>
        <div class="field">
          <label class="label is-hidden">Consulta</label>
          <div class="control">
            <textarea class="textarea" id="message" placeholder="Consulta"></textarea>
          </div>
        </div>
        <button class="button is-info is-light">Enviar</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactForm'
}
</script>
