exports.randomNumber = function(min, max) {
    if(!min) throw new TypeError("No has puesto el minimo de numeros!")
    if(!max) throw new TypeError("No has puesto el maximo de numeros!")
    return Math.floor(Math.random() * (max - min) + min) 
  }
  exports.code = function(lang, code) {
      lang:
       "asciidoc"
       "autohotkey"
       "bash"
       "coffeescript"
       "cpp"
       "cs"
       "css"
       "diff"
       "fix"
       "glsl"
       "ini"
       "json"
       "md"
       "ml"
       "prolog"
       "py"
       "tex"
       "xl"
       "xml"
      code:
      String
  }