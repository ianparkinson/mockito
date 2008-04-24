defineStructure(
"ArticleDatabase",function(factory){with(factory) { typeTable(["java.util.List","it"],["org.mockitousage.examples.use.ArticleDatabase","cl"],["java.lang.String","cl"],["org.mockitousage.examples.use.Article","cl"]),methodTable([1,"updateNumberOfArticles",[2,"int"],"me"],[1,"updateNumberOfPolishArticles",[2,"int"],"me"],[1,"updateNumberOfEnglishArticles",[2,"int"],"me"],[1,"getArticlesFor",[2],"me"],[1,"save",[3],"me"]),localVariableTable(["newspaper","updateNumberOfArticles(java.lang.String,int)-newspaper"],["newspaper","updateNumberOfPolishArticles(java.lang.String,int)-newspaper"],["newspaper","updateNumberOfEnglishArticles(java.lang.String,int)-newspaper"],["string","getArticlesFor(java.lang.String)-string"],["article","save(org.mockitousage.examples.use.Article)-article"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockitousage.examples.use;",nl,nl,ip," java.util.",T(0),";",nl,nl,C(1,[],$(pu,_,c,_,I("ArticleDatabase"),_,B(nl,nl,w(4),M(0,[],[],$(pu,_,v,_,I("updateNumberOfArticles"),P(V(0,$(T(2),_,I("newspaper"))),", ",j," articles"),_,B(nl,w(4)))),nl,nl,w(4),M(1,[],[],$(pu,_,v,_,I("updateNumberOfPolishArticles"),P(V(1,$(T(2),_,I("newspaper"))),", ",j," polishArticles"),_,B(nl,w(4)))),nl,nl,w(4),M(2,[],[],$(pu,_,v,_,I("updateNumberOfEnglishArticles"),P(V(2,$(T(2),_,I("newspaper"))),", ",j," i"),_,B(nl,w(4)))),nl,nl,w(4),M(3,[],[],$(pu,_,T(0),"&lt;",T(3),"> ",I("getArticlesFor"),P(V(3,$(T(2),_,I("string")))),_,B(nl,w(8),r,_,L("null"),";",nl,w(4)))),nl,nl,w(4),M(4,[],[],$(pu,_,v,_,I("save"),P(V(4,$(T(3),_,I("article")))),_,B(nl,w(4)))),nl))),nl);}});