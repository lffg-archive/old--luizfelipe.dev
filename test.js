/*
 * Criar tags BBCode
 * Descrição: Esta aplicação serve para a criação de novas tags bbcode.
 * Versão: 2.1
 * Autor: Daemon
 * Att: 01/03/2017
 * Veja mais em: http://ajuda.forumeiros.com
 */
jQuery(document).ready(function($) {
 
    var bbCodes = {
 
        // Nota: Adicione uma vírgula ao final de cada nova entrada
        // O '{ATTR}' é correspondente ao 'título' da tag, e o '{CONTENT}' é correspondente ao 'texto' entre as tags
 
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
 
    // Não altere nada daqui para baixo
 
    var getPost = $(".postbody, .blog_message");
    var entry;
    for (var i = 0, e;
        (e = getPost[i++]);) {
        entry = $(e);
        var re, match;
        $.each(bbCodes, function(tag, value) {
 
            re = value.close ? new RegExp("\\[" + tag + "(?:=("|'?)([^\\]]+)\\1)?\\]([\\s\\S]*?)\\[/" + tag + "]", "gi") : new RegExp("\\[" + tag + "(?:=("|'?)([^\\]]+)\\1)?\\]", "gi");
            match = entry.html().match(re);
 
            if (match) {
                var content, b, c, as_string, as_func, replacement;
                for (var tag in match) {
                    content = match[tag];
                    b = "$3";
                    if (value.replace) {
                        as_string = value.replace.toString();
                        as_func = eval('(' + as_string + ')');
                        if (as_func(content)) b = as_func(content);
                    }
                    replacement = value.replacement
                        .replace(/{ATTR}/g, "$2").replace(/{CONTENT}/g, b);
                    c = content.replace(re, replacement);
                    entry.html(entry.html().replace(content, c));
                }
            }
        });
    }
});
