import React from 'react';
import { TriangleAlert, Send, Trash2, X, Loader2 } from 'lucide-react';
import { useTranslation } from '../../node_modules/react-i18next';

const ConfirmationModal = ({ 
    isOpen, 
    onClose, 
    onConfirm, 
    title, 
    message, 
    confirmText, 
    cancelText, 
    type = 'danger', // 'danger' or 'success'
    isLoading = false 
}) => {
    const { i18n } = useTranslation();
    if (!isOpen) return null;

    const isDanger = type === 'danger';

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="glass-card w-full max-w-md p-8 shadow-2xl border-white/20 animate-in zoom-in-95 duration-300 text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${isDanger ? 'bg-red-500/20' : 'bg-gold/20'}`}>
                    <TriangleAlert className={`w-10 h-10 ${isDanger ? 'text-red-500' : 'text-gold'}`} />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    {message}
                </p>

                <div className="flex flex-col gap-3">
                    <button 
                        onClick={onConfirm}
                        disabled={isLoading}
                        className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                            isDanger 
                            ? 'bg-red-600 hover:bg-red-500 shadow-red-600/20' 
                            : 'bg-gold hover:bg-gold-hover shadow-gold/20'
                        } ${isDanger ? 'text-white' : 'text-matte'} shadow-lg`}
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            isDanger ? <Trash2 className="w-5 h-5" /> : <Send className="w-5 h-5" />
                        )}
                        {confirmText || (i18n.language === 'id' ? 'Konfirmasi' : 'Confirm')}
                    </button>
                    
                    <button 
                        onClick={onClose}
                        disabled={isLoading}
                        className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-bold border border-white/10 transition-all"
                    >
                        {cancelText || (i18n.language === 'id' ? 'Batal' : 'Cancel')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
