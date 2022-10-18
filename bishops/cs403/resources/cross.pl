%% Input dictionary:
word([a,d,d]).    word([a,d,o]).    word([a,g,e]).    word([a,g,o]).    word([a,i,d]).
word([a,i,l]).    word([a,i,m]).    word([a,i,r]).    word([a,n,d]).    word([a,n,y]).
word([a,p,e]).    word([a,p,t]).    word([a,r,c]).    word([a,r,e]).    word([a,r,k]).
word([a,r,m]).    word([a,r,t]).    word([a,s,h]).    word([a,s,k]).    word([a,u,k]).
word([a,w,e]).    word([a,w,l]).    word([a,y,e]).    word([b,a,d]).    word([b,a,g]).
word([b,a,n]).    word([b,a,t]).    word([b,e,e]).    word([b,o,a]).    word([e,a,r]).
word([e,e,l]).    word([e,f,t]).    word([f,a,r]).    word([f,a,t]).    word([f,i,t]).
word([l,e,e]).    word([o,a,f]).    word([r,a,t]).    word([t,a,r]).    word([t,i,e]).

%% Handy predicate to display the result list:
writelist([]).
writelist([H|T]) :- write(H), nl, writelist(T).

%% The predefined predicate nth1(N,L,R) binds R to the N-th element of L
%% (fails when the list is too short).  Elements in L are considered
%% numbered starting from 1.  For example:
% 
% ?- nth1(3,[a,b,c,d],R).
% R = c.
% 
% ?- nth1(5,[a,b,c,d],R).
% false.
