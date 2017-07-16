/***
 * Aplicação: Criar tags BBCode
 * Descrição: Esta aplicação serve para a criação de novas tags bbcode.
 * Versão: 2.0
 * Feito por Daemon e atualizado em: 26/09/2016
 * Veja mais em: http://ajuda.forumeiros.com
 ***/
jQuery(document).ready(function($) {
 
    var bbCodes = {
 
        // Nota: Adicione uma vírgula ao final de cada nova entrada;
        // O "{ATTR}" é correspondente ao 'título' da tag, e o "{CONTENT}" é correspondente ao texto entre as tags
 
        sucesso: {
            close: true,
            replacement: '<div class="success"><p>{ATTR}</p>{CONTENT}</div>'
        },
 
        aviso: {
            close: true,
            replacement: '<div class="warn"><p>{ATTR}</p>{CONTENT}</div>'
        },
 
        info: {
            close: true,
            replacement: '<div class="information"><p>{ATTR}</p>{CONTENT}</div>'
        },
 
        alerta: {
            close: true,
            replacement: '<div class="alert"><p>{ATTR}</p>{CONTENT}</div>'
        },
 
        visitante: {
            close: true,
            replacement: '<div class="guest">{CONTENT}</div>',
            replace: function(content) {
                if (_userdata.session_logged_in < 1) {
                    return "Você precisa estar conectado para visualizar este conteúdo";
                    return content;
                }
            }
        }
 
        // Nota: Não adicione vírgula ao final da última entrada
 
    };
 
    var getPost = $(".postbody , .blog_message"); //pega as postagens
    for (var i = 0, e;
        (e = getPost[i++]);) {
        var entry = $(e);
        $.each(bbCodes, function(tag, value) {
 
            var re = value.close ? new RegExp("\\[" + tag + "(?:=(\"|'?)([^\\]]+)\\1)?\\]([\\s\\S]*?)\\[/" + tag + "]", "gi") : new RegExp("\\[" + tag + "(?:=(\"|'?)([^\\]]+)\\1)?\\]", "gi");
            var match = entry.html().match(re);
 
            if (match) {
                for (var tag in match) {
                    var content = match[tag];
                    var b = "$3";
                    if (value.replace) {
                        var as_string = value.replace.toString();
                        var as_func = eval('(' + as_string + ')');
                        if (as_func(content)) b = as_func(content);
                    }
                    var replacement = value.replacement
                        .replace(/{ATTR}/g, "$2").replace(/{CONTENT}/g, b);
                    var c = content.replace(re, replacement);
                    entry.html(entry.html().replace(content, c));
                }
            }
        });
    }
});
