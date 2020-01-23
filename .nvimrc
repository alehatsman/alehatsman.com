augroup filetype_typescript
    autocmd!
    autocmd FileType typescript let b:ale_linters = ['standard']
    autocmd FileType typescript let b:ale_fixers = ['standard']

    autocmd FileType typescriptreact let b:ale_linters = ['standard']
    autocmd FileType typescriptreact let b:ale_fixers = ['standard']
augroup END

augroup filetype_javascript
    autocmd!
    autocmd FileType javascript let b:ale_linters = ['standard']
    autocmd FileType javascript let b:ale_fixers = ['standard']

    autocmd FileType typescriptreact let b:ale_linters = ['standard']
    autocmd FileType typescriptreact let b:ale_fixers = ['standard']
augroup END
