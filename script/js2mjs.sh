#/bin/sh

FILES=`find lib -name "*.js"`

for f in $FILES
do
    mv $f `echo $f | sed 's/\.js/\.mjs/'`
done
